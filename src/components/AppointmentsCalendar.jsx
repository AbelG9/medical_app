import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { findRecord } from "../services/genericService";
import Finder from "./Finder";
import { useState } from "react";
import Swal from "sweetalert2";

const AppointmentsCalendar = ({
  setShowModal,
  appointmentData,
  setAppointmentData,
}) => {
  const titleSearch = " Especialistas";
  const titleSearchPatients = " Pacientes";

  const [optionsLi, setOptionsLi] = useState([]);
  const [optionsLiPatients, setOptionsLiPatients] = useState([]);

  const [textValue, setTextValue] = useState("");
  const [textValuePatients, setTextValuePatients] = useState("");

  const [renderOptions, setRenderOptions] = useState(false);
  const [renderOptionsPatients, setRenderOptionsPatients] = useState(false);

  const [specialistId, setSpecialistId] = useState(0);
  const [events, setEvents] = useState([]);

  const handleDateSelect = (selectInfo) => {
    if (!appointmentData.doctor_id || !appointmentData.patient_id) {
      Swal.fire("Complete los datos necesarios!", "", "error");
    } else {
      const newData = {
        ...appointmentData,
        start_timedate: selectInfo.startStr,
        end_timedate: selectInfo.endStr,
      };
      setAppointmentData(newData);
      setShowModal(true);
    }
  };

  const searchText = async () => {
    const response = await findRecord("specialists", true, "name", textValue);
    let options = [];

    for (let i = 0; i < response.length; i++) {
      options.push({
        optionName: response[i].name,
        optionLastName: response[i].lastname,
        value: response[i].id,
      });
    }
    setOptionsLi(options);
    setRenderOptions(true);
  };

  const searchTextPatients = async () => {
    const response = await findRecord(
      "persons",
      false,
      "name",
      textValuePatients
    );
    let options = [];

    for (let i = 0; i < response.length; i++) {
      options.push({
        optionName: response[i].name,
        optionLastName: response[i].lastname,
        value: response[i].id,
      });
    }
    setOptionsLiPatients(options);
    setRenderOptionsPatients(true);
  };

  const handleChangeSearch = (e) => {
    setTextValue(e.target.value);
  };

  const searchAppointmentsBySpecialist = async () => {
    const response = await findRecord(
      "appointments",
      true,
      "doctor_id",
      specialistId
    );
    let eventsResponse = [];
    for (let i = 0; i < response.length; i++) {
      eventsResponse.push({
        title: response[i].patient_name + " " + response[i].patient_lastname,
        start: response[i].start_timedate,
      });
    }
    setEvents(eventsResponse);
  };

  const handleChangeSearchPatients = (e) => {
    setTextValuePatients(e.target.value);
  };

  const selectSpecialist = (optionName, optionLastName, value) => {
    const fullName = optionName + " " + optionLastName;
    setTextValue(fullName);
    setRenderOptions(false);
    const newData = {
      ...appointmentData,
      doctor_id: value,
      doctor_name: optionName,
      doctor_lastname: optionLastName,
    };
    setAppointmentData(newData);
    searchAppointmentsBySpecialist();
  };

  const selectPatient = (optionName, optionLastName, value) => {
    const fullName = optionName + " " + optionLastName;
    setTextValuePatients(fullName);
    setRenderOptionsPatients(false);
    const newData = {
      ...appointmentData,
      patient_id: value,
      patient_name: optionName,
      patient_lastname: optionLastName,
    };
    setAppointmentData(newData);
  };

  const renderLi = () => {
    let li = [];
    {
      renderOptions
        ? optionsLi &&
          optionsLi.map(({ optionName, optionLastName, value }) =>
            li.push(
              <li key={value} value={value}>
                <a
                  href="#"
                  className={`flex items-center justify-center px-3 h-9 leading-tight`}
                  onClick={() =>
                    selectSpecialist(optionName, optionLastName, value)
                  }
                >
                  {optionName + " " + optionLastName}
                </a>
              </li>
            )
          )
        : null;
    }
    return li;
  };

  const renderLiPatients = () => {
    let li = [];
    {
      renderOptionsPatients
        ? optionsLiPatients &&
          optionsLiPatients.map(({ optionName, optionLastName, value }) =>
            li.push(
              <li key={value} value={value}>
                <a
                  href="#"
                  className={`flex items-center justify-center px-3 h-9 leading-tight`}
                  onClick={() =>
                    selectPatient(optionName, optionLastName, value)
                  }
                >
                  {optionName + " " + optionLastName}
                </a>
              </li>
            )
          )
        : null;
    }
    return li;
  };

  return (
    <>
      <Finder
        titleSearch={titleSearch}
        handleChangeSearch={handleChangeSearch}
        renderLi={renderLi}
        searchText={searchText}
        textValue={textValue}
      />
      <Finder
        titleSearch={titleSearchPatients}
        handleChangeSearch={handleChangeSearchPatients}
        renderLi={renderLiPatients}
        searchText={searchTextPatients}
        textValue={textValuePatients}
      />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="timeGridWeek"
        weekends={true}
        events={events}
        // eventContent={renderEventContent}
        selectable={true}
        editable={false}
        // eventClick={handleEventClick}
        select={handleDateSelect}
        locale="es"
      />
    </>
  );
};

export default AppointmentsCalendar;
