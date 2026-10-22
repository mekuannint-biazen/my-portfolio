const highlights = [
  {
    title: "50+",
    description:
      "Projects Built.",
  },
  {
    title: "3",
    description:
      "Promotions Earned",
  },
  {
    title: "Hands-On",
    description:
      "Client Work",
  },
  {
    title: "Full-Stack Development & Security",
    description:
      "Focus Areas",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
{/* Section Title */}
<div className="text-center animate-fade-in">
  <h2 className="text-2xl md:text-3xl font-bold text-white">
    About Me
  </h2>
</div>

{/* Personal Statement */}
<div className="text-center max-w-4xl mx-auto pt-6 mb-12 animate-fade-in animation-delay-100">
  <p className="text-base text-muted-foreground leading-relaxed">
    I’m Mekuannint, a web developer and master’s student in cybersecurity in computer science at GWU. I enjoy building clean, reliable web applications, working with real users, and continuously improving my skills across software development, and secure-by-design systems.
  </p>
</div>
        {/* Main Content */}
        <div className="grid lg:grid-cols-[3fr_1fr] gap-6 items-start">

          {/* Left Column */}
          {/* Left Column */}
<div
  className="glass rounded-2xl p-8 glow-border animate-fade-in animation-delay-200 "
>
   <h2 className="text-xl md:text-xl font-bold text-white text-cente">
    My Story
  </h2>
  <div className="space-y-5 text-muted-foreground text-base leading-8">

    <p>
      I'm a passionate software engineer with over 5 years of experience
      crafting digital products that make a difference. My journey started
      with a curiosity for how things work on the web, and it has evolved
      into a deep expertise in modern frontend technologies.
    </p>

    <p>
      I specialize in React, Next.js, and TypeScript, building everything
      from sleek landing pages to complex enterprise applications. My
      approach combines technical excellence with a keen eye for design and
      user experience.
    </p>

    <p>
      When I'm not coding, you'll find me exploring new technologies,
      contributing to open-source projects, or sharing knowledge with the
      developer community.
      I specialize in React, Next.js, and TypeScript, building everything from sleek landing pages to complex enterprise applications. My approach combines technical excellence with a keen eye for design and user experience.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
    </p>

  </div>
</div>
          {/* Right Column */}
          <div className="flex flex-col gap-4 mt-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-3 rounded-xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <h3 className="text-base font-semibold mb-2 text-center">
                  {item.title}
                </h3>

                <p className="text-base text-muted-foreground text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;