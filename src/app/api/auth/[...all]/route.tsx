import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Export a config object to specify which routes to protect
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// Handle GET and POST requests
export async function GET() {
  const session = await auth();
  const userId = session.userId;
  
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  return NextResponse.json({ message: "Authentication endpoint", userId });
}

export async function POST() {
  const session = await auth();
  const userId = session.userId;
  
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  return NextResponse.json({ message: "Authentication endpoint", userId });
}
