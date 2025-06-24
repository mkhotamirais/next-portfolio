import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles & Blog | Mkhotami - Web Development Insights",
  description:
    "Read insightful articles and blog posts by Mkhotami on web development, covering topics like React, Laravel, WordPress, performance optimization, and best practices.",
};

export default function Posts() {
  const posts = getAllPosts();

  return (
    <section className="py-4">
      <div className="container">
        <h1 className="h1">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.slug}
              className="group relative border rounded-md p-2 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-all"
            >
              <h3 className="font-semibold">{post.meta.title}</h3>
              <p className="text-sm text-muted-foreground">{post.meta.excerpt}</p>
              <span className="text-xs text-muted-foreground">{post.meta.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
