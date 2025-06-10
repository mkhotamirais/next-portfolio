import React from "react";

const exps = [
  {
    job: "Freelance Web Developer",
    company: "Mkhotami",
    date: "Tangerang, 2024 - Now",
    description:
      "I build custom websites that help clients—from schools to travel agencies—establish a strong online presence. I handle everything from design to deployment, delivering responsive and user-friendly web solutions tailored to their goals.",
  },
  {
    job: "ReactJs and NodeJs (Online Bootcamp)",
    company: "Eduwork.id",
    date: "Jogjakarta, 2023 - 2024",
    description:
      "Completed an intensive 5-month bootcamp focused on full-stack development using React.js and Node.js. Gained hands-on experience through real projects, including building a complete e-commerce site, preparing me for real-world work environments.",
  },
  {
    job: "Ultimate Microsoft Office (Pre-Recorded Videos)",
    company: "Udemy",
    date: "Bandung, 2021-2022",
    description:
      "Completed a comprehensive course on Microsoft Word and Excel, mastering both fundamental and advanced features for efficient document and data handling.",
  },
];

export default function SectionExperiences() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="h2">Experiences</h2>
        <div className="space-y-4">
          {exps.map((exp, index) => (
            <div key={index} className="">
              <h3 className="font-semibold">{exp.job}</h3>
              <p className="text-sm">{exp.company}</p>
              <span className="text-xs text-muted-foreground">{exp.date}</span>
              <p
                className="mt-2 text-sm text-muted-foreground border-l-2 pl-2 border-blue-600"
                dangerouslySetInnerHTML={{ __html: exp.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
