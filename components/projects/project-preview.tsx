"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectPreviewProps = {
  title: string;
  image: string;
  gradient: string;
};

export function ProjectPreview({ title, image, gradient }: ProjectPreviewProps) {
  const [hasError, setHasError] = useState(false);

  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} ${hasError ? "opacity-100" : "opacity-90"}`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-bold tracking-tight text-white/20 ${hasError ? "text-5xl" : "text-4xl"}`}
        >
          {initials}
        </span>
      </div>
      {!hasError && (
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setHasError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
