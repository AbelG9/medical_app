import { Link } from "react-router-dom";

const PersonsTable = ({persons}) => {
  return (
    <section className="body-font px-4 pt-16">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pacientes</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Listado de pacientes</p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Id</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Name</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">LastName</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Email</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Gender</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  persons ? (persons.map(({id, name, lastname, email, gender}) => (
                    <tr key={id}>
                      <td className="px-4 py-3">{id}</td>
                      <td className="px-4 py-3 text-lg text-white">{name}</td>
                      <td className="px-4 py-3 text-lg text-white">{lastname}</td>
                      <td className="px-4 py-3">{email}</td>
                      <td className="px-4 py-3 capitalize">{gender}</td>
                      {/* <td className="d-flex">
                        <Link className="btn btn-primary btn-sm" to={`/editperson/${id}`}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <button className="btn btn-danger btn-sm ms-2" 
                        // onClick={() => {handleEliminar(id)}}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td> */}
                    </tr>
                  )
                )) : null
                }
              </tbody>
            </table>
          </div>
          {/* <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Button</button>
          </div> */}
        </div>
      </section>
  )
}

export default PersonsTable;