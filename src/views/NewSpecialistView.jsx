import SpecialistsForm from "../components/SpecialistsForm";
import { useState } from "react";
import { saveNewRecord } from "../services/genericService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NewSpecialistView = () => {
  const entityName = "specialists";
  const newSpecialist = {
    name: "",
    lastname: "",
    cmp_code: "",
    specialty_code: "",
  };
  const useAltURL = true;

  const [data, setData] = useState(newSpecialist);
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
      title: "Desea editar los datos de el/la especialista?",
      text: "Verifique los datos!",
      confirmButtonText: "Si, deseo guardarlos",
      showCancelButton: true,
      cancelButtonText: "No, no deseo guardarlos",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await saveNewRecord(entityName, data, useAltURL);
        if (response) {
          Swal.fire(
            "Se ha guardado los datos de el/la especialista correctamente!",
            "",
            "success"
          );
          navigate("/specialists");
        }
      } else if (result.isDenied) {
        Swal.fire("No se ha guardado nada!", "", "info");
      }
    });
  };

  return (
    <SpecialistsForm
      specialist={data}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={"Ingrese datos de nuevo/a especialista"}
    />
  );
};

export default NewSpecialistView;
