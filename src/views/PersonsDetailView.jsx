import React from "react";

const PersonsDetailView = () => {
  return (
    <>
      <section className="body-font relative">
        <div className="container px-8 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-3/4 md:w-2/3 flex flex-col mx-auto w-full py-8 px-3 sm:px-8 mt-8 md:mt-6 sm:mt-4 bg-gray-900 text-white rounded-3xl">
            <h2 className="text-xl mx-8 font-bold title-font">
              DATOS DE PACIENTE
            </h2>
            <p className="text-md text-gray-500 mt-3 mb-5 mx-8">
              Editar datos de paciente
            </p>
            <div className="relative mb-4 mx-3 sm:mx-8">
              <label htmlFor="name" className="leading-7 text-md">
                Nombre
              </label>
              <input
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
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 mx-3 sm:mx-8">
              <label htmlFor="genre" className="leading-7 text-md">
                Género
              </label>
              <input
                type="text"
                id="genre"
                name="genre"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mx-auto mt-4">
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonsDetailView;
