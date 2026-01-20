export default function ContactPage() {
  return (
    <div className="card">
      <h1 style={{ marginTop: 0, marginBottom: 6 }}>Contact</h1>
      <p className="p" style={{ maxWidth: 900, marginTop: 0 }}>
        Demo contact page. Replace placeholders with real inboxes, SLAs, and B2B onboarding flow.
      </p>

      <div className="badge" style={{ maxWidth: 720, marginTop: 12 }}>
        <div><b>Email:</b> support@ascensionlabs.example</div>
        <div><b>Location:</b> New York, NY</div>
        <div className="small" style={{ marginTop: 8 }}>
          Please do not request dosing, administration guidance, or therapeutic advice. RUO only.
        </div>
      </div>
    </div>
  );
}
