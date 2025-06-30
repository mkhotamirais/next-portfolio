"use client";

import { SearchIcon } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { projects } from "@/app/(home-sections)/SectionProjectsSkills";
import Link from "next/link";
import { useDebouncedCallback } from "use-debounce";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IPost } from "@/lib/types";

export default function Search({ posts }: { posts: IPost[] }) {
  const [filteredPosts, setFilteredPosts] = useState<IPost[] | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlParams = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

  const linkStyle = "block py-2 px-3 hover:bg-black/10 dark:hover:bg-white/10 rounded";
  const titleStyle = "sticky top-0 px-5 py-2 bg-white/80 dark:bg-black/80 text-sm rounded-md";

  const filteredProjects = projects
    .sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
    .filter((project) => {
      return project.title.toLowerCase().includes(urlParams.get("q")?.toLowerCase() || "");
    });

  useEffect(() => {
    if (posts) {
      setFilteredPosts(
        posts
          .sort((a, b) => a.meta.title.toLowerCase().localeCompare(b.meta.title.toLowerCase()))
          .filter((post) => post.meta.title.toLowerCase().includes(urlParams.get("q")?.toLowerCase() || ""))
      );
    }
  }, [posts, urlParams]);

  const onSearch = useDebouncedCallback((e: string) => {
    if (e) {
      urlParams.set("q", e);
    } else {
      urlParams.delete("q");
    }
    router.push(`?${urlParams.toString()}`);
  }, 300);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} aria-label="search">
          <SearchIcon />
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 py-4 border-none max-w-sm mx-auto [&>button]:hidden bg-white/80 dark:bg-black/80 dark:text-white">
        <DialogHeader className="hidden">
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div onClick={(e) => e.stopPropagation()} className="rounded-md overflow-hidden px-3">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => onSearch(e.target.value)}
            className="w-full border border-muted-foreground py-2 px-3 rounded-md"
          />
          <div className="h-[50vh] overflow-y-scroll">
            {filteredPosts?.length === 0 && filteredProjects?.length === 0 ? (
              <div className="p-2">No result found</div>
            ) : null}

            {filteredProjects?.length ? (
              <div>
                <h3 className={titleStyle}>Projects</h3>
                <div className="p-2">
                  {filteredProjects.map((project, i) => (
                    <Link href={project.url} key={i} className={linkStyle}>
                      <p>{project.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {filteredPosts?.length ? (
              <div>
                <div className={titleStyle}>Posts</div>
                <div className="p-2">
                  {filteredPosts?.map((posts, i) => (
                    <Link href={`/posts/${posts.slug}`} key={i} className={linkStyle}>
                      <p>{posts.meta.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
