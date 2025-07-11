import Pending from "@/components/Pending";
import React from "react";

export default function Loading() {
  return (
    <section className="min-h-screen">
      <div className="container flex justify-center py-8">
        <Pending />
      </div>
    </section>
  );
}
