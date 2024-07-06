import { useState, useEffect } from "react";
import SpecialtiesTable from "../components/SpecialtiesTable";
import Swal from "sweetalert2";
import {
  getLimitedRecords,
  getRecordsCount,
  deleteRecord,
} from "../services/genericService";
import CardView from "../components/CardView";
import Paginator from "../components/Paginator";

const SpecialtiesView = () => {
  const entityName = "specialties";
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(null);

  const getData = async () => {
    const getData = await getLimitedRecords(entityName, page, perPage);
    setData(getData);
  };

  const getDataCount = async () => {
    const dataCount = await getRecordsCount(entityName);
    setTotal(dataCount);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Desea eliminar la especialidad?",
      text: "Esta acción es irreversible 🙀!",
      confirmButtonText: "Si, deseo eliminarla",
      showCancelButton: true,
      cancelButtonText: "No, no deseo eliminarla",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteRecord(entityName, id);
        if (response) {
          Swal.fire(
            "Se ha eliminado la especialidad correctamente!",
            "",
            "success"
          );
          setTotal(null);
        }
      } else if (result.isDenied) {
        Swal.fire("No se ha eliminado nada!", "", "info");
      }
    });
  };

  useEffect(() => {
    if (total === null) {
      getDataCount();
      setPage(1);
    }
    getData();
  }, [page, total]);

  if (data === null) {
    return <p>Cargando contenido...</p>;
  }

  return (
    <CardView>
      <SpecialtiesTable specialties={data} handleDelete={handleDelete} />
      <Paginator
        page={page}
        setPage={setPage}
        perPage={perPage}
        total={total}
      />
    </CardView>
  );
};

export default SpecialtiesView;
