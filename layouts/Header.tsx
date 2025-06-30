import Logo from "@/components/Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { ThemeToggle } from "./ThemeToggle";
import Search from "@/components/Search";
import { getAllPosts } from "@/lib/posts";
import { Suspense } from "react";

export default function Header() {
  const posts = getAllPosts();
  return (
    <header className={`h-16 sticky backdrop-blur-sm top-0 z-50 bg-white/80 dark:bg-black/80`}>
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <NavDesktop />
          <Suspense fallback={null}>
            <Search posts={posts} />
          </Suspense>

          {/* <Search /> */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
