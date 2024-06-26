import { useState, useEffect } from "react";
import PersonsTable from "../components/PersonsTable";
import Swal from "sweetalert2";
import axios from "axios";
import { getPersons, deletePersons } from "../services/personsService";

const PersonsView = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const getData = await getPersons();
    setData(getData);
  };

  const handleEliminar = async (id) => {
    Swal.fire({
      title: "Desea eliminar el paciente?",
      text: "Esta acción es irreversible 🙀!",
      confirmButtonText: "Si, deseo eliminarlo",
      showCancelButton: true,
      cancelButtonText: "No, no deseo eliminarlo",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deletePersons(id);
        if (response) {
          Swal.fire(
            "Se ha eliminado el paciente correctamente!",
            "",
            "success"
          );
        }
      } else if (result.isDenied) {
        Swal.fire("No se ha eliminado nada!", "", "info");
      }
      getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <PersonsTable persons={data} handleEliminar={handleEliminar} />;
};

export default PersonsView;
