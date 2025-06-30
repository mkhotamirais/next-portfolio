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

  const filteredProjects = projects.filter((project) => {
    return project.title.toLowerCase().includes(urlParams.get("q")?.toLowerCase() || "");
  });

  useEffect(() => {
    if (posts) {
      setFilteredPosts(
        posts.filter((post) => post.meta.title.toLowerCase().includes(urlParams.get("q")?.toLowerCase() || ""))
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

      <DialogContent className="p-0 border-none max-w-sm mx-auto [&>button]:hidden max-h-[80vh] bg-black/80 text-white">
        <DialogHeader className="hidden">
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div onClick={(e) => e.stopPropagation()} className="rounded-md overflow-hidden px-3">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => onSearch(e.target.value)}
            className="w-full border py-2 px-3 rounded-md"
          />
          <div className="border h-[70vh] overflow-y-scroll">
            {filteredPosts?.length === 0 && filteredProjects?.length === 0 ? (
              <div className="p-2 text-muted-foreground">No result found</div>
            ) : null}

            {filteredProjects?.length ? (
              <div>
                <h3 className="sticky top-0 px-5 py-2 bg-black/80 text-sm text-muted-foreground">Projects</h3>
                <div className="p-2">
                  {filteredProjects.map((project, i) => (
                    <Link
                      href={project.url}
                      key={i}
                      className="block py-2 px-3 hover:bg-white/10 rounded text-muted-foreground"
                    >
                      <p>{project.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {filteredPosts?.length ? (
              <div>
                <div className="sticky top-0 px-5 py-2 bg-black/80 text-sm text-muted-foreground">Posts</div>
                <div className="p-2">
                  {filteredPosts?.map((posts, i) => (
                    <Link
                      href={`/posts/${posts.slug}`}
                      key={i}
                      className="block py-2 px-3 hover:bg-white/10 rounded text-muted-foreground"
                    >
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
