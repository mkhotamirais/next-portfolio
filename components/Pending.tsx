import { Loader } from "lucide-react";
import React from "react";

export default function Pending() {
  return (
    <section>
      <div className="container flex justify-center py-8">
        <Loader className="w-8 h-8 animate-spin text-primary" />
      </div>
    </section>
  );
}
