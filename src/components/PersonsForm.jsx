import CardView from "../components/CardView";

const PersonsForm = ({ person }) => {
const { id, name, lastname, email, gender } = person;

  return (
    <CardView>
      <h2 className="text-xl mx-8 font-bold title-font">DATOS DE PACIENTE</h2>
      <p className="text-md text-gray-500 mt-3 mb-5 mx-8">
        Editar datos de paciente
      </p>
      <div className="relative mb-4 mx-3 sm:mx-8">
        <label htmlFor="idPerson" className="leading-7 text-md">
          Id
        </label>
        <input
          disabled
          readOnly
          value={id}
          type="text"
          id="idPerson"
          name="idPerson"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 mx-3 sm:mx-8">
        <label htmlFor="name" className="leading-7 text-md">
          Nombre
        </label>
        <input
          value={name}
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 mx-3 sm:mx-8">
        <label htmlFor="lastname" className="leading-7 text-md">
          Apellido
        </label>
        <input
        value={lastname}
          type="text"
          id="lastname"
          name="lastname"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 mx-3 sm:mx-8">
        <label htmlFor="email" className="leading-7 text-md">
          Email
        </label>
        <input
        value={email}
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 mx-3 sm:mx-8">
        <label htmlFor="gender" className="leading-7 text-md">
          Género
        </label>
        <input
        value={gender}
          type="text"
          id="gender"
          name="gender"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="mx-auto mt-4">
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Guardar cambios
        </button>
      </div>
    </CardView>
  );
};

export default PersonsForm;
