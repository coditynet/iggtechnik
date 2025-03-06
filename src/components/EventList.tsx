import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  requirements: string[];
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // const getEventTypeIcon = (type: string) => {
  //   switch (type.toLowerCase()) {
  //     case 'konzert':
  //       return <Mic size={18} className="text-blue-600" />;
  //     case 'vortrag':
  //       return <Monitor size={18} className="text-blue-600" />;
  //     default:
  //       return <Info size={18} className="text-blue-600" />;
  //   }
  // };

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "konzert":
        return "bg-purple-100 text-purple-800";
      case "vortrag":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
      <div className="flex items-center justify-between border-b border-gray-100 p-5">
        <h3 className="text-xl font-bold text-gray-900">Veranstaltungsliste</h3>
        <span className="text-sm text-gray-500">
          {sortedEvents.length} Veranstaltungen
        </span>
      </div>

      {sortedEvents.length === 0 ? (
        <div className="p-10 text-center text-gray-500">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <Calendar size={24} className="text-gray-400" />
          </div>
          <p className="font-medium">Keine Veranstaltungen geplant.</p>
          <p className="mt-2 text-sm">
            Melden Sie Ihre Veranstaltung jetzt an.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="p-5 transition-colors duration-200 hover:bg-gray-50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="mb-2 flex items-center">
                    <span
                      className={`mr-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getEventTypeColor(event.type)}`}
                    >
                      {event.type}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900">
                      {event.title}
                    </h4>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-1 text-gray-400" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 text-sm text-gray-600 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                  <div className="flex items-center rounded-lg bg-gray-100 px-3 py-1.5">
                    <Calendar size={16} className="mr-2 text-gray-500" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center rounded-lg bg-gray-100 px-3 py-1.5">
                    <Clock size={16} className="mr-2 text-gray-500" />
                    <span>{event.time} Uhr</span>
                  </div>
                </div>
              </div>

              {event.requirements.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
