import SpecialtiesForm from "../components/SpecialtiesForm";
import { useState } from "react";
import { saveNewRecord } from "../services/prismaGenericService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NewSpecialtyView = () => {
  const entityName = "specialties";
  const newSpecialty = {
    name: "",
    description: "",
    code: "",
  };

  const [data, setData] = useState(newSpecialty);
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
      title: "Desea guardar los datos de la especialidad?",
      text: "Verifique los datos!",
      confirmButtonText: "Si, deseo guardarlos",
      showCancelButton: true,
      cancelButtonText: "No, no deseo guardarlos",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await saveNewRecord(entityName, data);
        if (response) {
          Swal.fire(
            "Se ha guardado los datos de la especialidad correctamente!",
            "",
            "success"
          );
          navigate("/specialties");
        }
      } else if (result.isDenied) {
        Swal.fire("No se ha guardado nada!", "", "info");
      }
    });
  };

  return (
    <SpecialtiesForm
      specialty={data}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      title={"Ingrese datos de nueva especialidad"}
    />
  );
};

export default NewSpecialtyView;
