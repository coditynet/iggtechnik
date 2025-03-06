"use client";

import { UserButton } from "@clerk/nextjs";
import { HelpCircle, LayoutDashboard } from "lucide-react";

export function CustomUserButton() {
  return (
    <header>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Dashboard"
            labelIcon={<LayoutDashboard className="mr-2 h-4 w-4" />}
            href="/dashboard"
          />
          <UserButton.Action label="manageAccount" />
        </UserButton.MenuItems>

        <UserButton.UserProfilePage
          label="Help"
          labelIcon={<HelpCircle className="mr-2 h-4 w-4" />}
          url="help"
        >
          <div>
            <h1>Hilfe Seite</h1>
            <p>Kontakt: kommt dann irgenwann </p>
            {/* TODO: Add a real help page */}
          </div>
        </UserButton.UserProfilePage>
      </UserButton>
    </header>
  );
}
