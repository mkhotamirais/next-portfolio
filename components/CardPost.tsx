import { IPost } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { smartTrim } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
// import { en } from "date-fns/locale"; // jika ingin bahasa Indonesia

export default function CardPost({ post }: { post: IPost }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      key={post.slug}
      className="flex flex-col group space-y-2 relative border rounded-md p-2 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-all"
    >
      <h3 className="font-semibold">{post.meta.title}</h3>
      <div className="flex flex-wrap gap-1">
        <Badge>{post.meta.category}</Badge> |
        {post.meta.tags?.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <p className="text-muted-foreground text-sm grow">{smartTrim(post.meta.excerpt, 100)}</p>
      <p className="mt-auto text-xs text-muted-foreground">
        {formatDistanceToNow(new Date(post.meta.date), { addSuffix: true })}
      </p>
    </Link>
  );
}
