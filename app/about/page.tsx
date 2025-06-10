import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="min-h-screen">
      <div className="container">
        <h1 className="h1">About</h1>
        <div className="min-h-screen"> space</div>
        <Link href="/about" scroll={true}>
          about
        </Link>
        <Link href="/" scroll={true}>
          home
        </Link>
      </div>
    </section>
  );
}
