import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  requirements: string[];
}

interface EventCalendarProps {
  events: Event[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const monthNames = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const dayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  const getEventsForDate = (date: string) => {
    return events.filter((event) => event.date === date);
  };

  const renderCalendarDays = () => {
    const days = [];

    // Add cells for days from previous month
    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = 0; i < firstDayOfMonth; i++) {
      const day = prevMonthDays - firstDayOfMonth + i + 1;
      days.push(
        <div
          key={`prev-${i}`}
          className="h-28 border border-gray-100 bg-gray-50 p-2"
        >
          <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full font-medium text-gray-400">
            {day}
          </div>
        </div>,
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const dayEvents = getEventsForDate(date);
      const isToday =
        new Date().toDateString() === new Date(date).toDateString();

      days.push(
        <div
          key={day}
          className={`h-28 overflow-hidden border border-gray-100 p-2 transition-colors duration-200 ${
            isToday ? "bg-blue-50" : "text-black hover:bg-gray-50"
          }`}
        >
          <div
            className={`mb-1 flex h-7 w-7 items-center justify-center rounded-full font-medium ${
              isToday ? "bg-blue-600 text-white" : "text-black"
            }`}
          >
            {day}
          </div>
          {dayEvents.map((event) => (
            <div
              key={event.id}
              className="mb-1 cursor-pointer truncate rounded-md bg-blue-100 p-1.5 text-xs text-blue-800 transition-colors duration-200 hover:bg-blue-200"
              title={event.title}
            >
              {event.time} - {event.title}
            </div>
          ))}
        </div>,
      );
    }

    // Add cells for days from next month
    const totalDays = firstDayOfMonth + daysInMonth;
    const remainingDays = 7 - (totalDays % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(
          <div
            key={`next-${i}`}
            className="h-28 border border-gray-100 bg-gray-50 p-2"
          >
            <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full font-medium text-gray-400">
              {i}
            </div>
          </div>,
        );
      }
    }

    return days;
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
      <div className="flex items-center justify-between border-b border-gray-100 p-5">
        <button
          onClick={prevMonth}
          className="rounded-lg p-2 transition-colors duration-200 hover:bg-slate-800 bg-slate-500"
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className="text-xl font-bold text-gray-900">
          {monthNames[month]} {year}
        </h3>
        <button
          onClick={nextMonth}
          className="rounded-lg p-2 transition-colors duration-200 hover:bg-slate-800 bg-slate-500"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7">
        {dayNames.map((day) => (
          <div
            key={day}
            className="border-b border-gray-100 bg-gray-50 py-3 text-center font-semibold text-gray-900"
          >
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default EventCalendar;
