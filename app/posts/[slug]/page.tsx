import { getPostBySlug } from "@/lib/posts";
import { marked } from "marked";
import { notFound } from "next/navigation";
import React from "react";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const html = marked(post.content);

  return (
    <section className="section">
      <div className="container">
        <article className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }}></article>
      </div>
    </section>
  );
}
