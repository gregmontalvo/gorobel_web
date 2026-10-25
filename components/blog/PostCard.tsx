import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import Link from "@/components/i18n/Link";
import type { BlogPost } from "@/lib/content/blog-types";

interface PostCardProps {
  post: BlogPost;
  readLabel: string;
  minutesLabel: string;
  sizes: string;
}

export default function PostCard({ post, readLabel, minutesLabel, sizes }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow card-hover"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={sizes}
        />
        <span className="absolute top-3 left-3 bg-[var(--color-charcoal)]/80 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-md">
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-[var(--color-charcoal)] text-base leading-snug mb-3 line-clamp-3">
          {post.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[var(--color-stone)] text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {minutesLabel}
          </span>
          <span className="text-[var(--color-forest)] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
            {readLabel}
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
