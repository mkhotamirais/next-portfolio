import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDir);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      meta: data,
      content,
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    meta: data,
    content,
  };
}
