import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog/posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Ascension Labs`,
    description: post.description,
    openGraph: { title: post.title, description: post.description },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="container" style={{ maxWidth: 760 }}>
      <article style={{ padding: "40px 0" }}>
        {/* Back link */}
        <Link href="/blog" style={{ fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
          ← Back to Research Blog
        </Link>

        {/* Header */}
        <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{
            fontSize: 11, background: "rgba(100,210,255,.12)", color: "rgba(100,210,255,.9)",
            padding: "3px 10px", borderRadius: 20, fontWeight: 600,
          }}>{post.category}</span>
          <span className="small">{post.date}</span>
          <span className="small">·</span>
          <span className="small">{post.readTime}</span>
        </div>

        <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, marginBottom: 12, letterSpacing: "-.5px" }}>{post.title}</h1>
        <p className="p" style={{ fontSize: 16, marginBottom: 40, maxWidth: 600 }}>{post.description}</p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: 11, color: "var(--muted)", border: "1px solid var(--border)",
              padding: "3px 10px", borderRadius: 12,
            }}>{tag}</span>
          ))}
        </div>

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />

        {/* CTA */}
        <div style={{
          marginTop: 48, padding: "28px 32px", background: "var(--panel)",
          border: "1px solid var(--border)", borderRadius: "var(--radius2)",
        }}>
          <h3 style={{ fontSize: 18, marginBottom: 8 }}>Source Research-Grade Peptides</h3>
          <p className="p" style={{ fontSize: 14, marginBottom: 16 }}>
            Every Ascension Labs compound ships with third-party COA, ≥99% purity guarantee, and same-day processing from NYC.
          </p>
          <Link className="btn btnPrimary" href="/shop" style={{ display: "inline-block" }}>Browse Catalog →</Link>
        </div>
      </article>
    </div>
  );
}

/** Simple markdown → HTML (handles ##, **, |tables|, lists, links) */
function markdownToHtml(md: string): string {
  let html = md
    .replace(/^### (.+)$/gm, '<h3 style="font-size:18px;font-weight:600;margin:28px 0 12px;">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 style="font-size:22px;font-weight:600;margin:36px 0 14px;letter-spacing:-.3px;">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li style="margin:4px 0;padding-left:4px;">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li style="margin:4px 0;padding-left:4px;">$2</li>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color:rgba(100,210,255,.9);text-decoration:underline;">$1</a>')
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid var(--border);margin:32px 0;">')
    .replace(/\n\n/g, '</p><p class="p" style="font-size:15px;line-height:1.7;margin:0 0 16px;">');

  // Simple table support
  html = html.replace(/\|(.+)\|\n\|[-| ]+\|\n([\s\S]*?)(?=\n\n|\n$|$)/g, (match, header, body) => {
    const headers = header.split('|').map((h: string) => h.trim()).filter(Boolean);
    const rows = body.trim().split('\n').map((row: string) =>
      row.split('|').map((c: string) => c.trim()).filter(Boolean)
    );
    return `<table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;">
      <thead><tr>${headers.map((h: string) => `<th style="text-align:left;padding:8px 12px;border-bottom:1px solid var(--border);color:var(--muted);font-size:12px;">${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.map((r: string[]) => `<tr>${r.map((c: string) => `<td style="padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.04);">${c}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>`;
  });

  return `<p class="p" style="font-size:15px;line-height:1.7;margin:0 0 16px;">${html}</p>`;
}
