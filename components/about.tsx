"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -25% 0px",
  });

  const clergy = [
    {
      name: "Fr. David Bumsted",
      image: "/clergy/fr-david-bumsted.jpg", // Placeholder - add actual image path
    },
    {
      name: "Fr. Thom Crowe",
      image: "/clergy/fr-thom-crowe.jpg", // Placeholder - add actual image path
    },
    {
      name: "Fr. Carson Webb",
      image: "/clergy/fr-carson-webb.jpg", // Placeholder - add actual image path
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-black"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-white/40"></div>
                <div className="text-xs uppercase tracking-widest text-white/80">
                  About Us
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
                Who We Are
              </h2>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <p className="text-2xl md:text-3xl font-light leading-tight mb-12 text-white">
                The <span className="font-semibold">Dead Theologians Society</span> is a community of believers who gather to encounter the riches of Christian tradition through the writings of the Church Fathers—those giants of faith who lived, prayed, and theologized in the early centuries of Christianity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-white/70 leading-relaxed">
                <p>
                  We're convinced that the voices of Athanasius, Augustine, Chrysostom, Basil, and countless others aren't merely historical curiosities. They're living witnesses whose insights on Scripture, prayer, Christian living, and doctrinal truth remain profoundly relevant for the Church today.
                </p>
                <p>
                  Through study, prayer, and fellowship, we seek to learn from these "dead theologians" so that their ancient faith might breathe new life into our modern walk with Christ.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="mb-16">
          <motion.h3
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8"
          >
            Our Leadership
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {clergy.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/50 hover:bg-white/10 transition-all duration-300 overflow-hidden rounded-sm"
              >
                <div className="aspect-square bg-white/10 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23999'%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-white">
                    {member.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}

      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>
    </section>
  );
}