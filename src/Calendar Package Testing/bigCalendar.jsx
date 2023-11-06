import React from "react";
import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import moment from "moment";

const localizer = globalizeLocalizer(globalize);

const myEventsList = [
  {
    id: 1,
    title: "Event 1",
    start: new Date(2023, 10, 1, 10, 0),
    end: new Date(2023, 10, 1, 12, 0),
  },
  {
    id: 2,
    title: "Event 2",
    start: new Date(2023, 10, 2, 14, 0),
    end: new Date(2023, 10, 2, 16, 0),
  },
  // Add more events as needed
];

const BigCalendar = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default BigCalendar;
