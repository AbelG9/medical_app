import PersonsForm from "../components/PersonsForm";
import { useState } from "react";
import { saveNewPerson } from "../services/personsService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NewPersonDetailView = () => {
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
        title: "Desea guardar los datos de paciente?",
        text: "Verifique los datos!",
        confirmButtonText: "Si, deseo guardarlos",
        showCancelButton: true,
        cancelButtonText: "No, no deseo guardarlos",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await saveNewPerson(data);
          if (response) {
            Swal.fire(
              "Se ha guardado los datos de paciente correctamente!",
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

export default NewPersonDetailView;
