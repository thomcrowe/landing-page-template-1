"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function JoinUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -25% 0px",
  });

  const meetings = [
    {
      name: "Saint John's",
      day: "Thursdays",
      time: "6:00 PM",
      location: "Saint John's Episcopal Church",
      address: "4200 S Atlanta Pl",
      city: "Tulsa, OK 74105",
      mapUrl: "https://maps.google.com/maps?q=36.115646,-95.972058&z=15&output=embed",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=36.115646,-95.972058",
    },
    {
      name: "Jenks Coffee Co",
      day: "Fridays",
      time: "12:00 PM",
      location: "Jenks Coffee Co",
      address: "103 E Main Street",
      city: "Jenks, OK",
      mapUrl: "https://maps.google.com/maps?q=36.022972,-95.969306&z=15&output=embed",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=36.022972,-95.969306",
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
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
        staggerChildren: 0.15,
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
        type: "spring" as const,
        stiffness: 45,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="join-us"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-neutral-900 to-black"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">
              When & Where
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Join Us
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {meetings.map((meeting, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/50 hover:bg-white/10 transition-all duration-300 overflow-hidden rounded-sm"
            >
              {/* Location Name Header */}
              <div className="px-8 pt-6 pb-0">
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {meeting.name}
                </h3>
              </div>

              {/* Map Section */}
              <div className="w-full h-64 bg-white/10 relative overflow-hidden mt-4 group">
                <iframe
                  src={meeting.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              
              {/* Info Section */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-white/80" />
                  <h4 className="text-xl font-bold text-white">
                    {meeting.day} @ {meeting.time}
                  </h4>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-white mb-1">
                      {meeting.location}
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      {meeting.address}
                      <br />
                      {meeting.city}
                    </p>
                  </div>
                </div>

                <a
                  href={meeting.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white/30 text-white/80 px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>
    </section>
  );
}