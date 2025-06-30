import { Button } from "@/components/ui/button";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import c from "@/lib/content.json";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h1 className="h1">Let’s Work Together</h1>
        <p className="text-muted-foreground mb-8">
          I am always open to new opportunities and collaborations. Whether you have a project idea, a job offer, or
          just want to say hi — feel free to reach out.
        </p>
        <div className="flex flex-col gap-2">
          <a href={c.links.mail} className="w-fit">
            <Button size={"lg"} variant={"link"} className="!pl-0">
              <FaEnvelope />
              tami01.job@gmail.com
            </Button>
          </a>
          <a href={c.links.wa} className="w-fit">
            <Button size={"lg"} variant={"link"} className="!pl-0">
              <FaWhatsapp />
              +62 877-6660-6133
            </Button>
          </a>
          <a href={c.links.linkedin} className="w-fit">
            <Button size={"lg"} variant={"link"} className="!pl-0">
              <FaLinkedin />M Khotami Rais
            </Button>
          </a>
          <a href={c.links.github} className="w-fit">
            <Button size={"lg"} variant={"link"} className="!pl-0">
              <FaGithub />
              mkhotamirais
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
