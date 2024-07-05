import { useState, useEffect } from "react";
import PersonsTable from "../components/PersonsTable";
import Swal from "sweetalert2";
import {
  getPersons,
  getPersonsCount,
  deletePerson,
} from "../services/personsService";
import CardView from "../components/CardView";
import Paginator from "../components/Paginator";

const PersonsView = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(null);

  const getData = async () => {
    const getData = await getPersons(page, perPage);
    setData(getData);
  };

  const getDataCount = async () => {
    const dataCount = await getPersonsCount();
    setTotal(dataCount);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Desea eliminar el paciente?",
      text: "Esta acción es irreversible 🙀!",
      confirmButtonText: "Si, deseo eliminarlo",
      showCancelButton: true,
      cancelButtonText: "No, no deseo eliminarlo",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deletePerson(id);
        if (response) {
          Swal.fire(
            "Se ha eliminado el paciente correctamente!",
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
      <PersonsTable persons={data} handleDelete={handleDelete} />
      <Paginator
        page={page}
        setPage={setPage}
        perPage={perPage}
        total={total}
      />
    </CardView>
  );
};

export default PersonsView;
