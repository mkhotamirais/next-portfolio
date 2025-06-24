"use client";

import { IPost } from "@/lib/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PostList({ posts }: { posts: IPost[] }) {
  const searchParams = useSearchParams();
  const search = (searchParams.get("postq") || "").toLowerCase();

  const filteredPosts = posts.filter(
    (post) => post.meta.title.toLowerCase().includes(search)

    // (post) => post.meta.title.toLowerCase().includes(search.toLowerCase())
    // ||
    // post.description.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredPosts.length === 0) {
    return <p className="text-muted-foreground mt-4">No articles found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
      {filteredPosts.map((post) => (
        <Link
          href={`/posts/${post.slug}`}
          key={post.slug}
          className="group relative border rounded-md p-2 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-all"
        >
          <h3 className="font-semibold">{post.meta.title}</h3>
          {/* <p className="text-sm text-muted-foreground">{post.meta.excerpt}</p> */}
          <span className="text-xs text-muted-foreground">{post.meta.date}</span>
        </Link>
      ))}
    </div>
  );
}
