import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const SpecialtiesTable = ({ specialties, handleDelete }) => {
  return (
    <>
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
          ESPECIALIDADES
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-md text-gray-500">
          Listado de especialidades
        </p>
      </div>
      <div className="xl:w-4/5 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap border border-gray-700 rounded-s-lg">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-sm rounded-tl rounded-bl">
                Id
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-sm">
                Nombre
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-sm">
                Descripción
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-sm">
                Código
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-sm">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 rounded-tr rounded-br">
            {specialties
              ? specialties.map(({ id, name, description, code }) => (
                  <tr key={id} className="rounded-bl rounded-br">
                    <td className="px-4 py-3">{id}</td>
                    <td className="px-4 py-3 text-lg">{name}</td>
                    <td className="px-4 py-3 text-sm text-clip overflow-hidden">
                      {description}
                    </td>
                    <td className="px-4 py-3 text-sm">{code}</td>
                    <td className="px-auto py-3 flex flex-row">
                      <Link to={`/specialties/${id}`}>
                        <button className="bg-orange-500 border border-orange-800 rounded px-2 py-1 ms-2">
                          <FaPencilAlt />
                        </button>
                      </Link>
                      <button
                        className="text-white bg-red-500 border border-red-800 rounded px-2 py-1 ms-2"
                        onClick={() => handleDelete(id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SpecialtiesTable;
