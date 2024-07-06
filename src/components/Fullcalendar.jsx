import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";

const events = [{ title: "Meeting", start: new Date() }];

const renderEventContent = (eventInfo) => {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
};

const handleEventClick = (clickInfo) => {
  console.log(clickInfo);
  // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //   clickInfo.event.remove()
  // }
};

const handleDateSelect = (selectInfo) => {
  console.log("select");
  console.log(selectInfo);
  console.log(selectInfo.start);
  console.log(selectInfo.start.toISOString())
  console.log(selectInfo.end);
  console.log(selectInfo.end.toISOString())

  // let title = prompt('Please enter a new title for your event')
  let calendarApi = selectInfo.view.calendar;
  console.log(calendarApi);

  // calendarApi.unselect() // clear date selection

  // if (title) {
  //   calendarApi.addEvent({
  //     id: createEventId(),
  //     title,
  //     start: selectInfo.startStr,
  //     end: selectInfo.endStr,
  //     allDay: selectInfo.allDay
  //   })
  // }
};

const Fullcalendar = () => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
        initialView="timeGridWeek"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
        selectable={true}
        editable={true}
        eventClick={handleEventClick}
        select={handleDateSelect}
      />
    </>
  );
};

export default Fullcalendar;
