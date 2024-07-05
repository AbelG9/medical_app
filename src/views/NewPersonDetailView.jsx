import PersonsForm from "../components/PersonsForm";
import { useState } from "react";
import { saveNewPerson } from "../services/personsService";

const NewPersonDetailView = () => {
  const newPerson = {
    name: "",
    lastname: "",
    email: "",
    gender: "",
  };
  const [data, setData] = useState(newPerson);

  const handleChange = (e) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saveData = await saveNewPerson(data);
    console.log(saveData);
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
