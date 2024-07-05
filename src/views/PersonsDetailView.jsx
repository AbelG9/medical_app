import PersonsForm from "../components/PersonsForm";
import { getPersonById, updatePerson } from "../services/personsService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PersonsDetailView = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

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
    const updateData = await updatePerson(id, data);
    console.log(updateData);
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
