import { Button } from "@/components/ui/button";
import Link from "next/link";
import c from "@/lib/content.json";

export default function NavDesktop() {
  return (
    <nav className="hidden md:flex items-center mr-2">
      {c.main_menu.map((item, i) => (
        <Link href={item.url} key={i}>
          <Button variant={"ghost"} className="">
            {item.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
