import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import SearchPost from "./SearchPost";
import PostList from "./PostList";
import FilterPostKeys from "./FilterPostKeys";

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
        <div className="space-y-2">
          <SearchPost />
          <FilterPostKeys />
          <PostList posts={posts} />
        </div>
      </div>
    </section>
  );
}
