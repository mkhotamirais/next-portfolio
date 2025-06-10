import { getPostBySlug } from "@/lib/posts";
import { marked } from "marked";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  // Fetch the post by slug
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const html = marked(post.content);

  return (
    <section className="section">
      <div className="container">
        <article className="prose">
          <h1 className="h1">{post.meta.title}</h1>
          <p className="text-sm text-gray-500">{post.meta.date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </section>
  );
}
