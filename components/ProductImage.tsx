"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

type ProductImageProps = {
  slug: string;
  alt: string;
  src?: string;
  fit?: "cover" | "contain";
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function ProductImage({
  slug,
  alt,
  src,
  fit = "cover",
  width = 640,
  height = 640,
  className,
  style,
}: ProductImageProps) {
  const resolvedSrc = useMemo(() => src ?? `/products/${slug}.png`, [slug, src]);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={className}
        style={{
          width,
          height,
          borderRadius: 12,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.6)",
          fontSize: 12,
          letterSpacing: 0.6,
          textTransform: "uppercase",
          ...style,
        }}
        aria-label={`${alt} image placeholder`}
      >
        Image coming soon
      </div>
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        width,
        height,
        borderRadius: 12,
        objectFit: fit,
        background: "rgba(255,255,255,0.04)",
        ...style,
      }}
      onError={() => setFailed(true)}
    />
  );
}
