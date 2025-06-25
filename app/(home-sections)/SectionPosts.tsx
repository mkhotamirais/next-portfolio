import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/posts";
import CardPost from "@/components/CardPost";

export default async function SectionPosts() {
  const posts = await getAllPosts();

  return (
    <section className="py-12" id="posts">
      <div className="container">
        <h2 className="h2">Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post, i) => (
            <CardPost key={i} post={post} />
          ))}
        </div>
        <Link href="/posts" className="mt-4 inline-block">
          <Button variant={"secondary"}>All Posts</Button>
        </Link>
      </div>
    </section>
  );
}
