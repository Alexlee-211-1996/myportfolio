import { Github, ExternalLink } from "lucide-react";
import ledgerProjectImage from "@/assets/ledger.png";
import apexscriptImage from "@/assets/apexscript.png";
import tradeproImage from "@/assets/tradepro.png";
import { Reveal, FadeInStagger, FadeInItem } from "@/components/animations/Reveal";

const ProjectsSection = () => {
    const featuredProjects = [
        {
            title: "Wix Website Design & Development for Up 2 Speed",
            description: "I designed and developed a fully responsive Wix website for Up 2 Speed, a performance therapy and sports recovery business. The site features a clean, modern design with dedicated service pages, clear calls to action, contact form integration, and full mobile optimization.",
            image: ledgerProjectImage,
            technologies: ["Wix", "HTML", "JavaScript", "Bootstrap", "CSS", "jQuery", "Node.js", "Express.js", "MongoDB", "JWT"],
        },
        {
            title: "StyleMeUp - Hair Stylist App",
            description: "StyleMeUp is a cutting-edge hair stylist app that brings the latest trends and personalized hairstyling services right to your fingertips. Designed for both clients and hairstylists, the app offers a convenient and seamless platform for scheduling appointments, exploring new looks, and connecting with top-notch hair professionals in your area.",
            image: apexscriptImage,
            technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "JWT"],
        },
        {
            title: "Telecare Pro Doctor Appointment Booking",
            description: "This application streamlines the process of scheduling medical appointments, connecting patients with healthcare professionals seamlessly. User-friendly design and efficient functionality.",
            image: tradeproImage,
            technologies: ["React", "TypeScript", "Node.js", "MySQL", "JWT",  "Android Studio", "java"],
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="section-title text-center">My Projects</h2>
                </Reveal>

                <div className="space-y-24 mt-16">
                    {featuredProjects.map((project, index) => (
                        <Reveal key={index}>
                            <div className="grid md:grid-cols-2 gap-12 items-center neobrutalist-card md:relative">
                                <div className="relative group overflow-hidden rounded-lg ring-1 ring-primary/10">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Featured Project</p>
                                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="relative bg-foreground/5 border border-border/60 rounded-xl shadow-lg p-6 md:p-8 md:-ml-16 backdrop-blur-sm">
                                        <p className="text-foreground/80 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-secondary font-mono text-sm">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={`${project.title}-${tech}-${techIndex}`} className="opacity-90">
                                                {tech}
                                                {techIndex < project.technologies.length - 1 && (
                                                    <span className="mx-2 text-foreground/40">•</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;