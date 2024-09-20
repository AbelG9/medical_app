import { useState } from "react";
import CardView from "../components/CardView";
import Modal from "../components/Modal";
import AppointmentsCalendar from "../components/AppointmentsCalendar";
import Swal from "sweetalert2";
import { saveNewRecord } from "../services/prismaGenericService.js";
import { useNavigate } from "react-router-dom";

const AppointmentsView = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    doctorId: null,
    patientId: null,
    doctor_name: "",
    doctor_lastname: "",
    patient_name: "",
    patient_lastname: "",
    startTimeDate: null,
    endTimeDate: null,
    description: "",
  });
  const entityName = "appointments";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    Swal.fire({
      title: "Desea guardar los datos de la cita?",
      text: "Verifique los datos!",
      confirmButtonText: "Si, deseo guardarlos",
      showCancelButton: true,
      cancelButtonText: "No, no deseo guardarlos",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const saveAppointmentData = {
          doctorId: appointmentData.doctorId,
          patientId: appointmentData.patientId,
          startTimeDate: appointmentData.startTimeDate,
          endTimeDate: appointmentData.endTimeDate,
          details: appointmentData.description,
        };
        const response = await saveNewRecord(entityName, saveAppointmentData);
        if (response) {
          Swal.fire(
            "Se ha guardado los datos de la cita correctamente!",
            "",
            "success"
          );
          navigate("/persons");
          setShowModal(false);
        }
      } else if (result.isDenied) {
        Swal.fire("No se ha guardado nada!", "", "info");
      }
      clearData();
    });
  };

  const handleChange = (e) => {
    const newData = {
      ...appointmentData,
      [e.target.name]: e.target.value,
    };
    setAppointmentData(newData);
  };

  const clearData = () => {
    setAppointmentData({
      doctorId: null,
      patientId: null,
      doctor_name: "",
      doctor_lastname: "",
      patient_name: "",
      patient_lastname: "",
      startTimeDate: null,
      endTimeDate: null,
      description: "",
    });
  };

  return (
    <CardView>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        appointmentData={appointmentData}
        setAppointmentData={setAppointmentData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <AppointmentsCalendar
        setShowModal={setShowModal}
        appointmentData={appointmentData}
        setAppointmentData={setAppointmentData}
        handleSubmit={handleSubmit}
      />
    </CardView>
  );
};

export default AppointmentsView;
