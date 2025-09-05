// add devion inside <head> in public/index.html
const skills = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express", icon: "devicon-express-original" }, // (black/white only in Devicon)
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "SQL", icon: "devicon-mysql-plain colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills 💪</span>
                </h2>

                {/* box */}
                <div
                    className="skill-box"
                    style={{
                        "--width": "100px",
                        "--height": "100px",
                        "--quantity": skills.length,
                    }}
                >
                    {/* slider */}
                    <div className="slider">
                        <div className="slider-list">
                            {skills.map((skill, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="slider-list-item flex flex-col items-center justify-center text-primary"
                                        style={{ "--position": index + 1 }}
                                    >
                                        <i
                                            className={`${skill.icon} text-6xl`}
                                        ></i>
                                        <span className="mt-2 text-sm ">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
