import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog/posts";

export const metadata = {
  title: "Research Blog — Ascension Labs",
  description: "Peptide research guides, protocols, and scientific insights from Ascension Labs.",
};

export default function BlogIndex() {
  return (
    <div className="container" style={{ maxWidth: 900 }}>
      <section style={{ padding: "40px 0 20px" }}>
        <div className="eyebrow">Research &amp; Insights</div>
        <h1 className="h1">Research Blog</h1>
        <p className="p" style={{ maxWidth: 600, marginBottom: 40 }}>
          Scientific guides, peptide research protocols, and compound spotlights — backed by published literature.
        </p>
      </section>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: "block",
              background: "var(--panel)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius2)",
              padding: "28px 32px",
              transition: "border-color .2s, box-shadow .2s",
            }}
            onMouseEnter={(e: any) => {
              e.currentTarget.style.borderColor = "var(--border2)";
              e.currentTarget.style.boxShadow = "var(--shadow)";
            }}
            onMouseLeave={(e: any) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", gap: 12, marginBottom: 10, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{
                fontSize: 11, background: "rgba(100,210,255,.12)", color: "rgba(100,210,255,.9)",
                padding: "3px 10px", borderRadius: 20, fontWeight: 600,
              }}>{post.category}</span>
              <span className="small">{post.date}</span>
              <span className="small">·</span>
              <span className="small">{post.readTime}</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8, lineHeight: 1.3 }}>{post.title}</h2>
            <p className="p" style={{ fontSize: 14, marginBottom: 12 }}>{post.description}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {post.tags.slice(0, 4).map((tag) => (
                <span key={tag} style={{
                  fontSize: 10, color: "var(--muted)", border: "1px solid var(--border)",
                  padding: "2px 8px", borderRadius: 12,
                }}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
