import fs from "fs";
import path from "path";
import Link from "next/link";

type CoaItem = {
  name: string;
  file: string;
};

const TOKEN_MAP: Record<string, string> = {
  bpc: "BPC",
  tb: "TB",
  reta: "RETA",
  tirz: "TIRZ",
  ghk: "GHK",
  tb500: "TB-500",
  bpc157: "BPC-157",
};

const COMBINED_TOKENS: Array<{ tokens: string[]; label: string }> = [
  { tokens: ["tb", "500"], label: "TB-500" },
  { tokens: ["bpc", "157"], label: "BPC-157" },
];

const toTitleCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const toReadableName = (filename: string) => {
  const base = filename.replace(/\.[^.]+$/, "");
  const rawTokens = base.split("-").filter(Boolean);
  const tokens = rawTokens.map(token => TOKEN_MAP[token] ?? token);
  const words: string[] = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const combined = COMBINED_TOKENS.find(entry =>
      entry.tokens.every((token, idx) => tokens[i + idx] === token)
    );
    if (combined) {
      words.push(combined.label);
      i += combined.tokens.length - 1;
      continue;
    }

    const token = tokens[i];
    if (token === token.toUpperCase()) {
      words.push(token);
      continue;
    }
    if (/^\d+$/.test(token)) {
      words.push(token);
      continue;
    }
    words.push(toTitleCase(token));
  }

  return words.join(" ");
};

const getCoaItems = (): CoaItem[] => {
  const coaDir = path.join(process.cwd(), "public", "coas");
  if (!fs.existsSync(coaDir)) return [];

  return fs
    .readdirSync(coaDir)
    .filter(file => /\.(png|jpg|jpeg|webp|pdf)$/i.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map(file => ({
      file,
      name: toReadableName(file),
    }));
};

export default function QualityPage() {
  const coas = getCoaItems();

  return (
    <div className="card">
      <h1 style={{ marginTop: 0, marginBottom: 6 }}>Quality & Compliance</h1>
      <p className="p" style={{ maxWidth: 980, marginTop: 0 }}>
        Documentation-forward catalog with lot tracking and COA access. All listings are presented for research and lab workflows with neutral, factual copy.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: 14 }}>
        <div className="badge">
          <b>COA per lot</b>
          <div className="small" style={{ marginTop: 6 }}>COA links are available on product cards and product pages.</div>
        </div>
        <div className="badge">
          <b>Lot tracking</b>
          <div className="small" style={{ marginTop: 6 }}>Structured SKUs with lot IDs for operational scalability.</div>
        </div>
        <div className="badge">
          <b>Controlled handling</b>
          <div className="small" style={{ marginTop: 6 }}>Add SOP language (storage, handling, shipping) once finalized.</div>
        </div>
        <div className="badge">
          <b>Compliance-first</b>
          <div className="small" style={{ marginTop: 6 }}>No dosage/protocol guidance. No therapeutic claims.</div>
        </div>
      </div>

      <hr className="hr" />

      <div className="coa-grid">
        {coas.length === 0 ? (
          <div className="small">COA files will appear here once uploaded.</div>
        ) : (
          coas.map(item => (
            <a
              key={item.file}
              className="coa-card"
              href={`/coas/${item.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="coa-name">{item.name}</div>
              <div className="coa-link">Open COA</div>
            </a>
          ))
        )}
      </div>

      <hr className="hr" />

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn btnPrimary" href="/shop">Shop</Link>
        <Link className="btn" href="/faq">FAQ</Link>
      </div>
    </div>
  );
}
