const PersonsTable = ({persons}) => {
  console.log(persons);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
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
                  <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br" />
                </tr>
              </thead>
              <tbody>
                {
                  persons ? (persons.map((person) => (
                    <tr>
                      <td className="px-4 py-3">{person.id}</td>
                      <td className="px-4 py-3 text-lg text-white">{person.name}</td>
                      <td className="px-4 py-3 text-lg text-white">{person.lastname}</td>
                      <td className="px-4 py-3">{person.email}</td>
                      <td className="px-4 py-3">{person.gender}</td>
                      <td className="w-10 text-center">
                        <input name="plan" type="radio" />
                      </td>
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