"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EventCalendar from "../components/EventCalendar";
import EventList from "../components/EventList";
import Footer from "../components/Footer";
import Link from "next/link";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link?.hash) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Schulkonzert",
      date: "2025-05-15",
      time: "19:00",
      location: "Aula",
      type: "Konzert",
      requirements: ["Mikrofone", "Beamer", "Generalprobe"],
    },
    {
      id: 2,
      title: "Informationsabend",
      date: "2025-05-20",
      time: "18:30",
      location: "Aula",
      type: "Vortrag",
      requirements: ["Beamer"],
    },
    {
      id: 3,
      title: "Theateraufführung",
      date: "2025-06-10",
      time: "19:00",
      location: "Aula",
      type: "Sonstiges",
      requirements: ["Mikrofone", "Beleuchtung", "Generalprobe"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div>
        <Navbar scrolled={scrolled} />
      </div>

      <main>
        {/* Hero Section - Enhanced with more dynamic design */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-700"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="bg-pattern absolute inset-0 opacity-10"></div>

          <div className="container relative z-10 mx-auto px-6 py-32 md:py-40">
            <div className="max-w-3xl">
              <div className="mb-6 inline-block rounded-full bg-blue-100 bg-opacity-20 px-3 py-1 text-blue-100 backdrop-blur-sm">
                Ignaz Günther Gymnasium
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
                IGG <span className="text-blue-300">Technik</span>
              </h1>
              <p className="mb-10 max-w-2xl text-xl text-blue-100">
                Einfache Verwaltung von Veranstaltungen in der Aula des Ignaz
                Günther Gymnasium
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/dashboard">
                <button className="transform rounded-lg bg-white px-8 py-4 font-medium text-blue-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl">
                  Veranstaltung anmelden
                </button>
                </Link>
                <Link href="#veranstaltungen">
                  <button className="rounded-lg border-2 border-white bg-transparent px-8 py-4 font-medium text-white transition duration-300 hover:bg-white hover:bg-opacity-10">
                    Kalender ansehen
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 200"
              className="fill-current text-gray-50"
            >
              <path d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,101.3C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"></path>
            </svg>
          </div>
        </section>

        {/* Aktuelles Section - Redesigned with more visual appeal */}
        <section className="bg-gray-50 py-20" id="aktuelles">
          <div className="container mx-auto px-6">
            <div className="mb-16 flex flex-col items-center">
              <div className="mb-6 h-1 w-16 rounded-full bg-blue-600"></div>
              <h2 className="text-4xl font-bold text-gray-900">Aktuelles</h2>
            </div>

            <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl md:p-10">
              <div className="mb-8 border-l-4 border-blue-600 pl-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  Hallo!
                </h3>
                <p className="text-gray-700">
                  Wir haben im Laufe des letzten Jahres diese Website entworfen.
                  Die aktuelle Version ist zwar vorläufig, aber funktionsfähig.
                </p>
              </div>

              <div className="mb-8 rounded-xl bg-blue-50 p-6">
                <h4 className="mb-4 text-xl font-semibold text-blue-900">
                  Und wie geht das jetzt?
                </h4>
                <ol className="mb-6 list-decimal space-y-3 pl-6 text-gray-700">
                  <li>E-Mail-Adresse angeben, unter der Sie erreichbar sind</li>
                  <li>Veranstaltungstitel angeben</li>
                  <li>Zeitraum der Veranstaltung angeben</li>
                  <li>
                    Genauere Details angeben:
                    <ul className="mt-2 list-disc space-y-2 pl-6">
                      <li>Vortrag/Konzert/Sonstiges? - Mikrofone?</li>
                      <li>Beamer?</li>
                      <li>
                        Generalprobe? (Bei Konzerten bitte unbedingt angeben!)
                      </li>
                      <li>Sonstiges?</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
                <p className="font-medium text-amber-800">
                  <strong>Wichtig:</strong> Bitte denken Sie daran die
                  Veranstaltungen mindestens eine Woche vor Tag der
                  Veranstaltung bei uns anzumelden!
                </p>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h4 className="mb-4 text-xl font-semibold text-gray-900">
                  Warum jetzt diese Website?
                </h4>
                <p className="text-gray-700">
                  In Zukunft soll diese Website als automatisiertes
                  Aula-Buchungs-Portal agieren. Somit wird die Planung der
                  Veranstaltung in allen technischen und nicht-technischen
                  Aspekten übersichtlicher und einfacher.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section - Enhanced with better spacing and visual hierarchy */}
        <section className="bg-white py-20" id="veranstaltungen">
          <div className="container mx-auto px-6">
            <div className="mb-16 flex flex-col items-center">
              <div className="mb-6 h-1 w-16 rounded-full bg-blue-600"></div>
              <h2 className="text-4xl font-bold text-gray-900">
                Kommende Veranstaltungen
              </h2>
              <p className="mt-4 max-w-2xl text-center text-gray-600">
                Hier finden Sie alle geplanten Veranstaltungen in der Aula des
                Ignaz Günther Gymnasium.
              </p>
            </div>

            <div className="mb-16">
              <EventCalendar events={events} />
            </div>

            <div>
              <EventList events={events} />
            </div>
          </div>
        </section>

        {/* CTA Section - Redesigned with gradient background and better visual appeal */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>

          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-4xl font-bold text-white">
                Bereit, Ihre Veranstaltung anzumelden?
              </h2>
              <p className="mb-10 text-xl text-blue-100">
                Nutzen Sie unser einfaches Anmeldeformular und wir kümmern uns
                um die technischen Details.
              </p>
              <Link href="/dashboard">
              <button className="transform rounded-lg bg-white px-8 py-4 font-medium text-blue-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl">
                Jetzt Veranstaltung anmelden
              </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
