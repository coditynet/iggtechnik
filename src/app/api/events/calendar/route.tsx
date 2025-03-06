/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { getEvents } from "@/server/db/queries";
import { ICalCalendar } from "ical-generator";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const events = await getEvents().catch(err => {
      throw new Error(`Failed to fetch events: ${err.message}`);
    });

    if (!events || !events.length) {
      return NextResponse.json(
        { message: "No events found" }, 
        { status: 404 }
      );
    }

    const calendar = new ICalCalendar({
      name: 'IGG Technik Veranstaltungen',
      timezone: 'Europe/Berlin',
      events: events.map(event => ({
        id: event.id.toString(),
        start: event.startDate,
        end: event.endDate,
        summary: event.name || "IGG Technik Veranstaltung",
        description: event.description,
        location: event.location || undefined,
        url: `https://${process.env.NEXT_PUBLIC_APP_URL}/events/${event.id}`,
        created: event.createdAt,
        lastModified: event.updatedAt,
      }))
    });

    return new Response(calendar.toString(), {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'attachment; filename="igg-technik-calendar.ics"',
      },
    });
  } catch (error: any) {
    console.error('Calendar generation error details:', {
      message: error?.message || 'Unknown error',
      code: error?.code,
      stack: error?.stack
    });
    
    return NextResponse.json(
      { 
        message: "Database connection failed",
        error: error?.message || 'Unknown database error',
        code: error?.code || 'UNKNOWN'
      },
      { status: 500 }
    );
  }
}