import PersonsForm from "../components/PersonsForm";
import { useState } from "react";
import { saveNewRecord } from "../services/genericService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NewPersonView = () => {
  const entityName = "persons";
  const newPerson = {
    name: "",
    lastname: "",
    email: "",
    gender: "",
  };
  const [data, setData] = useState(newPerson);
  const navigate = useNavigate();

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
      title: "Desea guardar los datos de el paciente?",
      text: "Verifique los datos!",
      confirmButtonText: "Si, deseo guardarlos",
      showCancelButton: true,
      cancelButtonText: "No, no deseo guardarlos",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await saveNewRecord(entityName, data);
        if (response) {
          Swal.fire(
            "Se ha guardado los datos de el paciente correctamente!",
            "",
            "success"
          );
          navigate("/persons");
        }
      } else if (result.isDenied) {
        Swal.fire("No se ha guardado nada!", "", "info");
      }
    });
  };

  return (
    <PersonsForm
      person={data}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={"Ingrese datos de nuevo paciente"}
    />
  );
};

export default NewPersonView;
