import Header from "@/components/header";

export default function Datenschutz() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <h1>Datenschutz:</h1>
          <p>
            Nutzung von Clerk für die Authentifizierung Zur Anmeldung und
            Verwaltung der Benutzerkonten auf unserer Website nutzen wir den
            Dienst Clerk der Clerk Inc., 2261 Market Street #4104, San
            Francisco, CA 94114, USA. Welche Daten werden verarbeitet? Im Rahmen
            der Authentifizierung über Clerk werden folgende personenbezogene
            Daten verarbeitet: E-Mail-Adresse Benutzername Passwort Diese Daten
            werden ausschließlich zur Anmeldung und Verwaltung des
            Benutzerkontos verwendet. Datenübermittlung in die USA Clerk ist
            nach dem EU-U.S. Data Privacy Framework (DPF) zertifiziert. Das
            bedeutet, dass die Verarbeitung personenbezogener Daten in den USA
            unter einem Datenschutzniveau erfolgt, das von der Europäischen
            Kommission als angemessen eingestuft wurde. Weitere Informationen
            zur DPF-Zertifizierung von Clerk finden Sie hier. Rechtsgrundlage
            der Verarbeitung Die Verarbeitung der personenbezogenen Daten
            erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), da die
            Anmeldung über Clerk zur Nutzung unseres Systems erforderlich ist.
            Weitere Informationen Details zur Datenverarbeitung durch Clerk
            finden Sie in der Datenschutzerklärung von Clerk unter:
            https://clerk.com/legal/privacy
          </p>
        </div>
      </div>
    </div>
  );
}
