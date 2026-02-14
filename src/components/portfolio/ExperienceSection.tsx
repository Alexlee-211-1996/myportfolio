import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/Reveal";

const ExperienceSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const experiences = [
    {
      company: "Sangfor Technologies",
      role: "Full-Stack Developer",
      date: "Mar 2023 – Sep 2025",
      description: [
        "Designed and developed enterprise-grade web applications serving thousands of active business users in high-availability environments",
        "Built scalable frontend interfaces and backend services, reducing average response time by 30% through API optimization and query tuning",
        "Implemented secure authentication and role-based access control aligned with enterprise security standards",
        "Refactored legacy modules, improving system maintainability and reducing production bugs by ~25%",
        "Collaborated with cross-functional teams (product, QA, DevOps) to deliver multiple production releases under strict deadlines",
        "Contributed to architectural decisions for performance scaling and modular system design",
      ],
      image: null,
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Full-Stack Developer",
      date: "Feb 2021 – Nov 2022",
      description: [
        "Developed and maintained full-stack web solutions for global enterprise clients across multiple industries",
        "Built RESTful APIs and integrated third-party services to support complex business workflows",
        "Delivered features in agile sprints, consistently meeting release timelines in fast-paced consulting environments",
        "Improved frontend performance and usability, contributing to increased user engagement and reduced support tickets",
        "Participated in code reviews and enforced clean architecture principles to ensure long-term maintainability",
        "Assisted in production deployment and post-release monitoring for mission-critical applications",
      ],
      image: null,
    },
    {
      company: "Capgemini",
      role: "Junior Developer",
      date: "Jan 2019 – Jun 2020",
      description: [
        "Supported development of enterprise web applications for international clients",
        "Implemented frontend components and backend logic under senior developer supervision",
        "Resolved production issues and contributed to system enhancements, improving feature stability",
        "Gained hands-on experience with version control, CI/CD workflows, and structured development processes",
        "Participated in technical discussions and sprint planning sessions within large project teams",
      ],
      image: null,
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="section-title">Experience</h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Reveal y={12}>
              <ul className="flex md:flex-col neobrutalist-card p-2">
                {experiences.map((exp, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCompany(index)}
                      className={cn(
                        "w-full p-3 text-left text-sm font-mono transition-colors duration-300",
                        selectedCompany === index
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                      )}
                    >
                      {exp.company}
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal>
              <div className="neobrutalist-card p-8">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {experiences[selectedCompany].role} @ <span className="text-primary">{experiences[selectedCompany].company}</span>
                  </h3>
                </div>
                <p className="text-sm font-mono text-gray-400 mt-1 mb-6">{experiences[selectedCompany].date}</p>
                <ul className="space-y-3">
                  {experiences[selectedCompany].description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary mr-3 mt-2 flex-shrink-0" style={{ transform: 'rotate(45deg)' }}></div>
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
