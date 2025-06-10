import React from "react";
import SectionHero from "./(home-sections)/SectionHero";
import SectionProjectsSkills from "./(home-sections)/SectionProjectsSkills";
import SectionPosts from "./(home-sections)/SectionPosts";
import SectionExperiences from "./(home-sections)/SectionExperiences";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionProjectsSkills />
      <SectionExperiences />
      <SectionPosts />
    </>
  );
}
