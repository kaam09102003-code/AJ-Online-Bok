"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { motion, AnimatePresence } from "framer-motion";

interface VideoItem {
  id: number;
  video: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    video: "/videos/video1.mp4",
  },
  {
    id: 2,
    video: "/videos/video2.mp4",
  },
  {
    id: 3,
    video: "/videos/video3.mp4",
  },
];

export function Celebs() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="celebs" className="relative
    overflow-hidden
    md:py-24 py-20 bg-[#12081F]">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#22113b] via-[#12081f] to-[#0d0618]" />

      <div className="absolute left-0 top-0 w-80 h-80 bg-pink-600/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-500/10 blur-[180px]" />

      <div className="relative container mx-auto px-8 sm:px-6">

        <div className="grid
    grid-cols-1
    lg:grid-cols-2
    gap-10
    lg:gap-14
    items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center jusify-center flex-col lg:items-start">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight">

                <span className="flex gap-2 lg:gap-0 lg:flex-col">
                  <span className="text-yellow-400">
                  Built
                </span>
                <span className="text-white">
                  on Trust
                </span>
                </span>

              </h2>

              <p className="
    mt-6
    lg:mt-8
    text-base
    sm:text-lg
    leading-7
    sm:leading-9
    text-gray-300
    max-w-lg
  ">
                BIG DADDY BOOK is a trusted platform for cricket and casino entertainment, built to deliver a secure, reliable, and seamless gaming experience. With fast deposits and withdrawals, premium gaming options, and dedicated 24/7 customer support, we ensure every player enjoys a safe and trusted environment.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              loop={false}
              speed={900}
              spaceBetween={25}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                }
              }}
            >
              {videos.map((item) => (

                <SwiperSlide key={item.id}>

                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      y: -8,
                    }}
                    className="
                      relative
                      rounded-3xl
                      overflow-hidden
                      cursor-pointer
                      group
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      shadow-[0_0_20px_rgba(255,255,255,.08)]
                      hover:shadow-[0_0_40px_rgba(255,215,0,.35)]
                      transition-all
                    "
                    onClick={() => setSelectedVideo(item.video)}
                  >

                    <div
                      className="
                              w-full
                              aspect-video
                              sm:aspect-[16/10]
                              lg:aspect-[16/17]
                              max-h-[75vh]
                              bg-black
                              relative"
                    >
                      <video
                        src={item.video}
                        muted
                        autoPlay
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover lg:object-contain"
                        suppressHydrationWarning
                      />
                    </div>

                    <div className="absolute inset-0 bg-black/25" />

                    {/* PLAY BUTTON */}

                    <div className="absolute inset-0 flex items-center justify-center">

                      <div
                        className="
                          h-24
                          w-24
                          rounded-full
                          border-4
                          border-white
                          bg-white/20
                          backdrop-blur-md
                          flex
                          items-center
                          justify-center
                          transition
                          group-hover:scale-110
                        "
                      >
                        <Play
                          fill="white"
                          size={42}
                          className="text-white ml-1"
                        />
                      </div>

                    </div>

                  </motion.div>

                </SwiperSlide>

              ))}

            </Swiper>

          </motion.div>

        </div>
      </div>
    </section>
  )
};