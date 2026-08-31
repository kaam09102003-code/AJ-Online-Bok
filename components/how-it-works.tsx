"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Message us on our WhatsApp number",
    },
    {
      number: "2",
      title: "Customer Satisfy guaranteed with all information",
    },
    {
      number: "3",
      title: "Start depositing & withdrawal instantly",
    },
    {
      number: "4",
      title: "Easily Earn from your skills",
    },
  ];

  return (
    <section
      id="how"
      className="relative overflow-hidden bg-[#140a23] py-16 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1033] via-[#160b28] to-[#0f081c]" />

      {/* Blur */}
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/20 blur-[120px]" />

      <div className="relative container mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          <span className="text-yellow-400">How</span> it works
        </motion.h2>

        {/* Steps */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center w-full lg:w-auto"
            >
              {/* Card */}

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .2,
                  duration: .7,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="flex flex-col items-center justify-center flex-1"
              >
                {/* Circle */}

                <div
                  className="
                  relative
                  h-44
                  w-44
                  rounded-full
                  border-2
                  border-pink-300
                  bg-purple-900/70
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-[0_0_35px_rgba(255,0,200,.45)]
                  transition-all
                  duration-300
                  hover:shadow-[0_0_60px_rgba(255,0,200,.7)]
                "
                >
                  <span className="text-3xl text-white">
                    Step
                  </span>

                  <span
                    className="
                    text-8xl
                    font-extrabold
                    text-transparent
                    bg-gradient-to-b
                    from-white
                    to-pink-300
                    bg-clip-text
                  "
                  >
                    {step.number}
                  </span>
                </div>

                <p className="mt-8 max-w-[230px] text-center text-lg leading-8 text-white">
                  {step.title}
                </p>
              </motion.div>

              {/* Arrow */}

              {index !== steps.length - 1 && (
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="hidden mb-24 lg:flex"
                >
                  <ChevronRight
                    size={50}
                    className="text-pink-400  drop-shadow-[0_0_10px_rgba(255,0,200,.8)]"
                  />
                  <ChevronRight
                    size={50}
                    className="text-pink-400 drop-shadow-[0_0_10px_rgba(255,0,200,.8)]"
                  />
                  <ChevronRight
                    size={50}
                    className="text-pink-400 drop-shadow-[0_0_10px_rgba(255,0,200,.8)]"
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}