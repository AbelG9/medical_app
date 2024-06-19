import useAxios from "../hooks/useAxios";
import PersonsTable from "../components/PersonsTable";

const PersonsView = () => {
  const URL = import.meta.env.VITE_ENDPOINT_BASE;
  const { data, error, loading } = useAxios(`${URL}/persons`);

  console.log({ data, error, loading });

  return (
    <div className="container">
      <div className="mb-3 justify-between pt-12 px-4">
        <PersonsTable persons={data}/>
      </div>
    </div>
  );
};

export default PersonsView;
