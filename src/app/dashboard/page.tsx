
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint @typescript-eslint/no-unsafe-assignment: "error" */


import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./_components/navbar";
import { currentUser } from '@clerk/nextjs/server'


export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={true} />
      <main className="container mx-auto mt-16 px-4 py-8">
        <h1 className="mb-8 text-2xl font-semibold text-gray-900">
          Hallo, {user.firstName}
        </h1>

        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-medium text-gray-900">
              Deine Veranstaltungen
            </h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Neue Veranstaltung
            </Button>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-sm">
              <h3 className="font-medium text-gray-900">
                Technischer Workshop: Industrie 4.0
              </h3>
              <p className="text-gray-600">15. April 2024 • 14:00 - 17:00</p>
              <span className="mt-2 inline-block rounded bg-green-50 px-2 py-1 text-sm text-green-700">
                Genehmigt
              </span>
            </div>

            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-sm">
              <h3 className="font-medium text-gray-900">
                Einführung in Robotik
              </h3>
              <p className="text-gray-600">20. April 2024 • 10:00 - 12:00</p>
              <span className="mt-2 inline-block rounded bg-yellow-50 px-2 py-1 text-sm text-yellow-700">
                Ausstehend
              </span>
            </div>

            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-sm">
              <h3 className="font-medium text-gray-900">IoT Workshop</h3>
              <p className="text-gray-600">25. April 2024 • 15:00 - 18:00</p>
              <span className="mt-2 inline-block rounded bg-gray-100 px-2 py-1 text-sm text-gray-700">
                Entwurf
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
