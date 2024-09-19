import SpecialistsForm from "../components/SpecialistsForm";
import { getRecordById, updateRecord } from "../services/prismaGenericService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SpecialistsDetailView = () => {
  const entityName = "specialists";

  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    const getData = await getRecordById(entityName, id);
    const editSpecialist = {
      id: getData.id,
      name: getData.name,
      lastname: getData.lastname,
      cmpCode: getData.cmpCode,
      specialtyId: getData.specialtyId,
    }
    setData(editSpecialist);
  };

  const handleChange = (e) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Desea editar los datos de el/la especialista?",
      text: "Verifique los datos!",
      confirmButtonText: "Si, deseo editarlos",
      showCancelButton: true,
      cancelButtonText: "No, no deseo editarlos",
    }).then(async (result) => {
      if (result.isConfirmed) {
        delete data.id;
        const response = await updateRecord(entityName, id, data);
        if (response) {
          Swal.fire(
            "Se ha guardado los datos de el/la especialista correctamente!",
            "",
            "success"
          );
          navigate("/specialists");
        }
      } else if (result.isDenied) {
        Swal.fire("No se ha editado nada!", "", "info");
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (data === null) {
    return <p>Cargando contenido...</p>;
  }

  return (
    <SpecialistsForm
      specialist={data}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={"Editar datos de especialista"}
    />
  );
};

export default SpecialistsDetailView;
