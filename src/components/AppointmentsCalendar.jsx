import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  findRecordbyNameOrLastname,
  getRecordsByParams,
  getRecordsByDateRange,
} from "../services/prismaGenericService";
import Finder from "./Finder";
import { useRef, useState, useEffect } from "react";
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

  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const calendarRef = useRef(null);

  const handleDateSelect = (selectInfo) => {
    if (!appointmentData.doctorId || !appointmentData.patientId) {
      Swal.fire("Complete los datos necesarios!", "", "error");
    } else {
      const newData = {
        ...appointmentData,
        startTimeDate: selectInfo.startStr,
        endTimeDate: selectInfo.endStr,
      };
      setAppointmentData(newData);
      setShowModal(true);
    }
  };

  const searchText = async () => {
    const response = await findRecordbyNameOrLastname(
      "specialists",
      "value",
      textValue
    );
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
    const response = await findRecordbyNameOrLastname(
      "patients",
      "value",
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

  const searchAppointmentsBySpecialist = async (value) => {
    const response = await getRecordsByParams(
      "appointments",
      "doctorId",
      value
    );
    let eventsResponse = [];
    for (let i = 0; i < response.length; i++) {
      eventsResponse.push({
        id: response[i].id,
        title: response[i].patient.name + " " + response[i].patient.lastname,
        start: response[i].startTimeDate,
        end: response[i].endTimeDate,
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
      doctorId: value,
      doctor_name: optionName,
      doctor_lastname: optionLastName,
    };
    setAppointmentData(newData);
    searchAppointmentsBySpecialist(value);
  };

  const selectPatient = (optionName, optionLastName, value) => {
    const fullName = optionName + " " + optionLastName;
    setTextValuePatients(fullName);
    setRenderOptionsPatients(false);
    const newData = {
      ...appointmentData,
      patientId: value,
      patient_name: optionName,
      patient_lastname: optionLastName,
    };
    setAppointmentData(newData);
  };

  const getAllAppointments = async () => {
    const response = await getRecordsByDateRange(
      "appointments",
      startDate,
      endDate
    );
    let eventsResponse = [];
    for (let i = 0; i < response.length; i++) {
      eventsResponse.push({
        id: response[i].id,
        title: response[i].patient.name + " " + response[i].patient.lastname,
        start: response[i].startTimeDate,
        end: response[i].endTimeDate,
      });
    }
    setEvents(eventsResponse);
  };

  const handleDatesSet = (arg) => {
    setStartDate(arg.start.toISOString());
    setEndDate(arg.end.toISOString());
  };

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();
    setStartDate(calendarApi.view.activeStart.toISOString());
    setEndDate(calendarApi.view.activeEnd.toISOString());
  }, []);

  useEffect(() => {
    if (startDate) {
      getAllAppointments();
    }
  }, [startDate]);

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
        ref={calendarRef}
        datesSet={handleDatesSet}
      />
    </>
  );
};

export default AppointmentsCalendar;
