import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

// This would come from your database
const dummyEvents = [
  {
    id: '1',
    title: 'Technischer Workshop: Industrie 4.0',
    date: '2024-04-15',
    time: '14:00 - 17:00',
    location: 'IGG Technik Hauptgebäude, Raum 201',
    status: 'approved',
    isDraft: false,
  },
  {
    id: '2',
    title: 'Einführung in Robotik',
    date: '2024-04-20',
    time: '10:00 - 12:00',
    location: 'IGG Technik Lab',
    status: 'pending',
    isDraft: false,
  },
  {
    id: '3',
    title: 'IoT Workshop',
    date: '2024-04-25',
    time: '15:00 - 18:00',
    location: 'Online',
    status: 'draft',
    isDraft: true,
  },
];

const statusStyles = {
  approved: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  declined: 'bg-red-100 text-red-800',
  draft: 'bg-gray-100 text-gray-800',
};

export default function EventsList() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Ihre Veranstaltungen</h2>
        <p className="text-sm text-gray-500">Verwalten Sie Ihre kommenden Veranstaltungen</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge 
                  variant="secondary" 
                  className={statusStyles[event.status as keyof typeof statusStyles]}
                >
                  {event.isDraft ? 'Entwurf' : event.status === 'approved' ? 'Genehmigt' : 
                    event.status === 'pending' ? 'Ausstehend' : 'Abgelehnt'}
                </Badge>
              </div>
              <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}