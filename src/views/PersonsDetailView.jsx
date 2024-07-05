import PersonsForm from "../components/PersonsForm";
import { getPersonById, updatePerson } from "../services/personsService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PersonsDetailView = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    const getData = await getPersonById(id);
    setData(getData);
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
      title: "Desea editar los datos de paciente?",
      text: "Esta acción es irreversible!",
      confirmButtonText: "Si, deseo editarlos",
      showCancelButton: true,
      cancelButtonText: "No, no deseo editarlos",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await updatePerson(id, data);
        if (response) {
          Swal.fire(
            "Se ha guardado los datos de paciente correctamente!",
            "",
            "success"
          );
          navigate("/persons");
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
    <PersonsForm
      person={data}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={"Editar datos de paciente"}
    />
  );
};

export default PersonsDetailView;
