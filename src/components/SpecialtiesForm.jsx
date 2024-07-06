import CardView from "../components/CardView";

const SpecialtiesForm = ({ specialty, handleChange, handleSubmit, title }) => {
  const { id, name, description, code } = specialty;

  return (
    <CardView>
      <h2 className="text-xl mx-8 font-bold title-font">
        DATOS DE ESPECIALIDAD
      </h2>
      <p className="text-md text-gray-500 mt-3 mb-5 mx-8">{title}</p>
      <form onSubmit={handleSubmit} className="mx-3 sm:mx-8">
        <div className="relative mb-4">
          <label htmlFor="idRecord" className="leading-7 text-md">
            Id
          </label>
          <input
            readOnly
            value={id}
            onChange={handleChange}
            type="text"
            id="idRecord"
            name="id"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-md">
            Nombre
          </label>
          <input
            value={name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="description" className="leading-7 text-md">
            Descripción
          </label>
          <input
            value={description}
            onChange={handleChange}
            type="textarea"
            id="description"
            name="description"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-md">
            Código
          </label>
          <input
            value={code}
            onChange={handleChange}
            type="text"
            id="code"
            name="code"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          type="submit"
        >
          Guardar cambios
        </button>
      </form>
    </CardView>
  );
};

export default SpecialtiesForm;
