import { Button } from "@/components/ui/button";
import c from "@/lib/content.json";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "@/components/Logo";

export default function NavMobile() {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size={"icon"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-64">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="hidden">
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-3">
            {c.main_menu.map((item, i) => (
              <SheetClose asChild key={i}>
                <Link href={item.url}>
                  <Button variant={"outline"} className="justify-start w-full">
                    {item.label}
                  </Button>
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
