import React from 'react';
import { Calendar, Clock, MapPin, Users, Share2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const dummyEvent = {
  id: '1',
  title: 'Technischer Workshop: Industrie 4.0',
  date: '2024-04-15',
  time: '14:00 - 17:00',
  location: 'IGG Technik Hauptgebäude, Raum 201',
  description: 'Ein intensiver Workshop über die neuesten Entwicklungen in der Industrieautomatisierung und deren praktische Anwendungen. Lernen Sie die Grundlagen von IoT, Smart Manufacturing und Predictive Maintenance kennen.',
  longDescription: `
    Tauchen Sie ein in die Welt der intelligenten Fertigung und erleben Sie hautnah, wie die digitale Transformation die Industrie revolutioniert.

    Was Sie lernen werden:
    • Grundlagen der Industrie 4.0
    • IoT-Implementierung in der Praxis
    • Predictive Maintenance Strategien
    • Datenanalyse und Visualisierung
    • Praktische Übungen an realen Systemen

    Dieser Workshop richtet sich an Techniker, Ingenieure und alle, die sich für die Zukunft der industriellen Fertigung interessieren.
  `,
  capacity: 30,
  registeredCount: 18,
  speaker: 'Dr. Michael Schmidt',
  speakerTitle: 'Leiter der Automatisierungsabteilung',
  speakerBio: 'Mit über 15 Jahren Erfahrung in der Industrieautomatisierung leitet Dr. Schmidt innovative Projekte im Bereich Smart Manufacturing.',
  imageUrl: '/workshop-industrie40.jpg',
  price: '290€',
  includes: [
    'Umfangreiche Workshopunterlagen',
    'Praxisnahe Übungen',
    'Zertifikat der Teilnahme',
    'Networking-Möglichkeiten',
    'Verpflegung & Getränke'
  ]
};

export default function EventPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] w-full">
        <Image
          src={dummyEvent.imageUrl}
          alt={dummyEvent.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="mb-4 text-4xl font-bold text-white">
              {dummyEvent.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{dummyEvent.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{dummyEvent.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{dummyEvent.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Über diese Veranstaltung</h2>
                <p className="text-gray-600 whitespace-pre-line">{dummyEvent.longDescription}</p>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Was ist enthalten</h2>
              <ul className="space-y-4">
                {dummyEvent.includes.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-600">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  {dummyEvent.price}
                </div>
                <div className="flex items-center space-x-3 text-gray-600 mb-4">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>{dummyEvent.registeredCount} / {dummyEvent.capacity} Teilnehmer</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                  Jetzt Anmelden
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Teilen
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Speichern
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Referent</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gray-200 relative overflow-hidden">
                    <Image
                      src="/speaker-profile.jpg"
                      alt={dummyEvent.speaker}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{dummyEvent.speaker}</p>
                    <p className="text-sm text-gray-600">{dummyEvent.speakerTitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {dummyEvent.speakerBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}