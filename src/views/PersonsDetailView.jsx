import PersonsForm from "../components/PersonsForm";
import { getPersonById } from "../services/personsService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PersonsDetailView = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const getData = async () => {
    const getData = await getPersonById(id);
    setData(getData);
  };

  useEffect(() => {
    getData();
  }, []);

  if(data === null){
    return <p>Cargando contenido...</p>
  }

  return <PersonsForm person={data} />;
};

export default PersonsDetailView;
