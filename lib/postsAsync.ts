import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export async function getAllPosts() {
  const filenames = await fs.readdir(postsDir);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(postsDir, filename);
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        meta: data,
        content,
      };
    })
  );

  return posts;
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.md`);
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      meta: data,
      content,
    };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
}
