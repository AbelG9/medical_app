import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const PersonsTable = ({ persons, handleEliminar }) => {
  return (
    <section className="body-font px-4 pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            Pacientes
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Listado de pacientes
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                  Id
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  Nombre
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  Apellido
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                  Género
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm text-center bg-gray-800 rounded-tr rounded-br">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {persons
                ? persons.map(({ id, name, lastname, email, gender }) => (
                    <tr key={id}>
                      <td className="px-4 py-3">{id}</td>
                      <td className="px-4 py-3 text-lg text-white">{name}</td>
                      <td className="px-4 py-3 text-lg text-white">
                        {lastname}
                      </td>
                      <td className="px-4 py-3">{email}</td>
                      <td className="px-4 py-3 capitalize">{gender}</td>
                      <td className="px-auto  py-3 flex flex-row">
                        <Link to={`/editperson/${id}`}>
                          <button
                            className="text-white bg-orange-500 border border-orange-800 rounded px-2 py-1 ms-2"
                          >
                            <FaPencilAlt />
                          </button>
                        </Link>
                        <button
                          className="text-white bg-red-500 border border-red-800 rounded px-2 py-1 ms-2"
                          onClick={() => handleEliminar(id)}
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
      </div>
    </section>
  );
};

export default PersonsTable;
