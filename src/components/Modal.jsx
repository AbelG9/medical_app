const Modal = ({
  showModal,
  setShowModal,
  appointmentData,
  setAppointmentData,
  handleSubmit,
  handleChange,
}) => {
  const {
    doctor_name,
    doctor_lastname,
    start_timedate,
    end_timedate,
    patient_name,
    patient_lastname,
    description,
  } = appointmentData;
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 my-6 mx-auto bg-gray-700 text-white rounded-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex items-start justify-between ml-2 p-4 border-b border-solid border-blue-600 rounded-t ">
                  <span className="text-xl font=semibold">Info de la cita</span>
                  <button
                    className="bg-transparent border-round text-white bg-gray-900 float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="opacity-7 h-8 w-8 text-xl block bg-red-900 border-blue-500 text-white py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-4">
                  <form className="bg-gray-700 text-white shadow-md rounded px-2 pt-6 pb-8 w-full">
                    <label
                      className="block text-sm font-semibold mb-1"
                      htmlFor="start_timedate"
                    >
                      Fecha y hora de inicio
                    </label>
                    <input
                      className="readonly mb-2 shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      name="start_timedate"
                      value={start_timedate.slice(0, -6)}
                      type="datetime-local"
                      onChange={handleChange}
                    ></input>
                    <label
                      className="block text-sm font-semibold mb-1"
                      htmlFor="end_timedate"
                    >
                      Fecha y hora de fin
                    </label>
                    <input
                      className="readonly mb-2 shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      name="end_timedate"
                      value={end_timedate.slice(0, -6)}
                      type="datetime-local"
                      onChange={handleChange}
                    ></input>
                    <label
                      className="block text-sm font-semibold mb-1"
                      htmlFor="doctor_name"
                    >
                      Especialista
                    </label>
                    <input
                      className="readonly mb-2 shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      name="doctor_name"
                      value={doctor_name + " " + doctor_lastname}
                      type="text"
                      onChange={handleChange}
                    />
                    <label
                      className="block text-sm font-semibold mb-1"
                      htmlFor="patient_name"
                    >
                      Paciente
                    </label>
                    <input
                      className="readonly mb-2 shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      name="patient_name"
                      value={patient_name + " " + patient_lastname}
                      type="text"
                      onChange={handleChange}
                    />
                    <label
                      className="block text-sm font-semibold mb-1"
                      htmlFor="description"
                    >
                      Descripcion
                    </label>
                    <input
                      className="mb-2 shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      name="description"
                      value={description}
                      type="textarea"
                      onChange={handleChange}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-red-600 font-bold rounded uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-white bg-blue-900 active:bg-blue-700 font-bold rounded uppercase text-sm px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => handleSubmit()}
                  >
                    Guardar cita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
