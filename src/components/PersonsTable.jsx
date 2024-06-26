import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const PersonsTable = ({ persons, handleEliminar }) => {
  return (
    <section className="body-font relative">
        <div className="container px-8 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-3/4 md:w-2/3 flex flex-col mx-auto w-full py-8 px-3 sm:px-8 mt-8 md:mt-6 sm:mt-4 bg-gray-900 text-white rounded-3xl">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
              PACIENTES
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-md text-gray-500">
              Listado de pacientes
            </p>
          </div>
          <div className="xl:w-4/5 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm rounded-tl rounded-bl">
                    Id
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm">
                    Nombre
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm">
                    Apellido
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm">
                    Email
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm">
                    Género
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm rounded-tr rounded-br">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 rounded-tr rounded-br">
                {persons
                  ? persons.map(({ id, name, lastname, email, gender }) => (
                      <tr key={id} className="rounded-bl rounded-br">
                        <td className="px-4 py-3">{id}</td>
                        <td className="px-4 py-3 text-lg">{name}</td>
                        <td className="px-4 py-3 text-lg">{lastname}</td>
                        <td className="px-4 py-3 text-sm">{email}</td>
                        <td className="px-4 py-3 capitalize text-sm">
                          {gender}
                        </td>
                        <td className="px-auto py-3 flex flex-row">
                          <Link to={`/persons/${id}`}>
                            <button className="bg-orange-500 border border-orange-800 rounded px-2 py-1 ms-2">
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
      </div>
    </section>
  );
};

export default PersonsTable;
