import useAxios from "../hooks/useAxios";
import PersonsTable from "../components/PersonsTable";

const PersonsView = () => {
  const URL = import.meta.env.VITE_ENDPOINT_BASE;
  const { data, error, loading } = useAxios(`${URL}/persons`);

  console.log({ data, error, loading });

  return <PersonsTable persons={data} />;
};

export default PersonsView;
