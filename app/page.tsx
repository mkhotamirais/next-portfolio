import React from "react";
import SectionHero from "./(home-sections)/SectionHero";
import SectionProjectsSkills from "./(home-sections)/SectionProjectsSkills";
import SectionPosts from "./(home-sections)/SectionPosts";
import SectionExperiences from "./(home-sections)/SectionExperiences";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionProjectsSkills />
      <SectionExperiences />
      <SectionPosts />
      <section className="pb-8">
        <div className="container flex items-center flex-col justify-center">
          <h1 className="h2">Let’s Connect</h1>
          <Link href="/contact">
            <Button size={"lg"}>Contact Me</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
