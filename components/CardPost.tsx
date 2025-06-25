import { IPost } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

export default function CardPost({ post }: { post: IPost }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      key={post.slug}
      className="group space-y-2 relative border rounded-md p-2 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-all"
    >
      <h3 className="font-semibold">{post.meta.title}</h3>
      <div className="flex gap-1">
        <Badge>{post.meta.category}</Badge> |
        {post.meta.tags?.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">{post.meta.excerpt}</p>
    </Link>
  );
}
