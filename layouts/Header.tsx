import Logo from "@/components/Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="h-16 sticky top-0 z-50 backdrop-blur-xs bg-white/30 dark:bg-black/30">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <NavDesktop />
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
