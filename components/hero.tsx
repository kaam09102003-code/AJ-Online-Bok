"use client";

import { GlassyButton } from "./glassy-button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
    const images = [
        "/images/roulette-casino.png",
        "/images/casino-girl.png",
        "/images/casino-chips.png",
    ];

    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative overflow-hidden bg-white pt-24 pb-12 dark:bg-blue-950"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-white to-amber-500/10 dark:via-blue-950"></div>

            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative container mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* ================= IMAGE ================= */}
                    <div className="order-2 flex justify-center lg:order-2">
                        <div className="relative h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={images[index]}
                                    initial={
                                        isMobile
                                            ? {
                                                opacity: 0,
                                                scale: 0.8,
                                            }
                                            : {
                                                opacity: 0,
                                                y: 120,
                                                scale: 0.9,
                                            }
                                    }
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }}
                                    exit={
                                        isMobile
                                            ? {
                                                opacity: 0,
                                                scale: 1.1,
                                            }
                                            : {
                                                opacity: 0,
                                                y: -120,
                                                scale: 1.05,
                                            }
                                    }
                                    transition={{
                                        duration: 0.9,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute inset-0"
                                >
                                    {/* Floating Animation */}
                                    <motion.div
                                        animate={
                                            isMobile
                                                ? {
                                                    scale: [1, 1.03, 1],
                                                }
                                                : {
                                                    y: [0, -12, 0],
                                                    scale: [1, 1.02, 1],
                                                }
                                        }
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="relative h-full w-full"
                                    >
                                        <Image
                                            src={images[index]}
                                            alt="Hero Image"
                                            fill
                                            priority
                                            className="object-contain drop-shadow-[0_0_40px_rgba(245,158,11,0.35)]"
                                        />
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* ================= CONTENT ================= */}
                    <div className="order-1 space-y-6 text-center lg:order-1 lg:text-left">
                        <div className="inline-block rounded bg-amber-500 px-4 py-2 text-sm font-semibold text-white">
                            India&apos;s Premier Cricket & Casino Platform
                            
                        </div>

                        <h1 className="text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl lg:text-5xl xl:text-7xl">
                            ♠ 👑⚜ 𝓐𝓙 Online BOOK ⚜👑 ♣
                        </h1>

                        <h2 className="text-xl font-semibold text-amber-500 sm:text-2xl">
                            🏆 Play Like a King. Win Like a Legend.
                        </h2>

                        <p className="mx-auto max-w-xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg lg:mx-0">
                            Experience premium sports trading and world-class casino
                            entertainment with live cricket action, fast deposits and
                            withdrawals, exclusive VIP rewards, and dedicated customer
                            support—all on one seamless platform.
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <GlassyButton variant="primary">
                                Message Us on WhatsApp
                            </GlassyButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}