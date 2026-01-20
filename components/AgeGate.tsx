"use client";
import { useEffect, useState } from "react";

const KEY = "ascension_age_ok_v1";

export default function AgeGate() {
  const [ok, setOk] = useState<boolean>(true);

  useEffect(() => {
    const v = localStorage.getItem(KEY);
    setOk(v === "1");
  }, []);

  // If you want the gate to show on first load, flip the initial state above to false.
  if (ok) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(0,0,0,.65)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div className="card" style={{ maxWidth: 680, width: "100%" }}>
        <h2 style={{ marginTop: 0 }}>Age Verification</h2>
        <p className="p" style={{ maxWidth: 620 }}>
          Are you over <b>21</b> years of age? By entering you acknowledge all products are supplied strictly for laboratory research and analytical purposes only.
          <b> Not for human consumption.</b>
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn btnPrimary" onClick={() => { localStorage.setItem(KEY, "1"); setOk(true); }}>
            Yes, I am 21+
          </button>
          <button className="btn" onClick={() => { window.location.href = "https://www.google.com"; }}>
            No
          </button>
        </div>
        <div className="small" style={{ marginTop: 10 }}>
          Demo note: this gate is currently disabled by default for easier presenting. Enable by changing initial state in <span className="kbd">components/AgeGate.tsx</span>.
        </div>
      </div>
    </div>
  );
}
