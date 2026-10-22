import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import AM from "../images/AM.png";
import EM from "../images/EM.png";
import BE from "../images/BE.png";
import FE from "../images/FE.png";
import MA from "../images/MA.png";
import UX from "../images/UX.png";
import WD from "../images/WD.png";

const FILTERS = [
  "All",
  "Software Development",
  "Cybersecurity",
  "Cloud Support",
  "Product",
  "Collaboration",
];

const highlightsData = [
  {
    title: "Front-End Development",
    img: FE,
    description:
      "Building responsive, accessible interfaces with React, Tailwind CSS, and modern JavaScript.",
    tag: "Software Development",
    proof:
      "Shipped 50+ client-facing pages and UI updates across multiple projects.",
  },
  {
    title: "Back-End & REST APIs",
    img: BE,
    description:
      "Developing server-side logic and REST APIs with Node.js/Express and integrating databases.",
    tag: "Software Development",
    proof:
      "Built endpoints, validations, and data flows that support real client workflows.",
  },
  {
    title: "Troubleshooting & Root Cause Thinking",
    img: EM,
    description:
      "Diagnosing deployment/runtime issues, reproducing bugs, and communicating fixes clearly.",
    tag: "Cloud Support",
    proof:
      "Handled time-sensitive issues across multiple clients and platforms.",
  },
  {
    title: "UX-Focused Development",
    img: UX,
    description:
      "Prioritizing usability and clarity while keeping performance and reliability in mind.",
    tag: "Product",
    proof:
      "Improved UI/UX through iterations, feedback, and practical edge-case handling.",
  },
  {
    title: "Client & Team Collaboration",
    img: AM,
    description:
      "Working directly with clients and cross-functional teams to gather requirements and deliver reliably.",
    tag: "Collaboration",
    proof:
      "Led communication and coordination across multiple projects.",
  },
  {
    title: "Secure Web Practices",
    img: WD,
    description:
      "Applying secure coding basics like input validation, authentication fundamentals, and OWASP Top 10 best practices.",
    tag: "Cybersecurity",
    proof:
      "Security mindset developed through coursework and practical development.",
  },
  {
    title: "Security Monitoring",
    img: MA,
    description:
      "Exploring logging, monitoring, and SIEM fundamentals through labs and coursework.",
    tag: "Cybersecurity",
    proof:
      "Comfortable reading logs, organizing technical data, and learning new tools quickly.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
    },
  }),
};

const tagStyle = () =>
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-primary/15 text-primary border border-primary/20";

const chipStyle = (active) => {
  const base =
    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300";

  return active
    ? `${base} bg-primary text-background shadow-lg`
    : `${base} glass text-foreground hover:bg-primary/10`;
};

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (activeFilter === "All") return highlightsData;

    return highlightsData.filter(
      (item) => item.tag === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="services"
      className="scroll-mt-24 py-12 px-6 text-foreground relative overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute -top-40 left-0 w-[450px] h-[450px] rounded-full blur-[140px] opacity-20"
          style={{ background: "#2B6F8A" }}
        />

        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
          style={{ background: "#3A8FB7" }}
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16 -mt-14">

          
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            What I Do
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Building modern web applications, secure software,
            and digital experiences that are fast, scalable,
            and user-focused.
          </p>

        </div>

        {/* Filter Buttons */}

        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {FILTERS.map((label) => (
            <button
              key={label}
              onClick={() => setActiveFilter(label)}
              className={chipStyle(activeFilter === label)}
            >
              {label}
            </button>
          ))}

        </div>

        {/* CTA */}

        <div className="flex flex-wrap justify-center gap-4 mb-14">

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-primary text-background font-semibold hover:scale-105 transition-all"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl glass font-semibold hover:bg-primary/10 transition-all"
          >
            Contact Me
          </a>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((item, index) => (
            <motion.article
              key={item.title}
              custom={index}
              variants={reduceMotion ? undefined : cardVariants}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -10,
                      scale: 1.02,
                    }
              }
              className="glass rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 glow-border"
            >
              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={tagStyle(item.tag)}>
                    {item.tag}
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-7">
                  {item.description}
                </p>

                {item.proof && (
                  <div className="mt-5 border-t border-border pt-5">

                    <span className="text-primary font-semibold">
                      Proof
                    </span>

                    <p className="mt-2 text-sm text-muted-foreground leading-6">
                      {item.proof}
                    </p>

                  </div>
                )}

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;