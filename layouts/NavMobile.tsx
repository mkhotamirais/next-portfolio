"use client";

import { Button } from "@/components/ui/button";
import c from "@/lib/content.json";
import Link from "next/link";
import Logo from "@/components/Logo";
import Sheet2 from "@/components/Sheet2";
import { SheetClose } from "@/components/ui/sheet";

export default function NavMobile() {
  return (
    <Sheet2 title={<Logo />} side="right">
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
    </Sheet2>
  );
}
