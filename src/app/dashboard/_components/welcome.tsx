interface WelcomeProps {
  firstName: string;
}

export default function DashboardWelcome({ firstName }: WelcomeProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        Willkommen, {firstName}
      </h1>
      <p className="mt-2 text-gray-600">
        Hier können Sie Ihre Veranstaltungen verwalten und neue erstellen.
      </p>
    </div>
  );
}