import { GlassyButton } from "./glassy-button";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 lg:py-24 dark:bg-blue-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-white to-white dark:via-blue-950 dark:to-blue-950"></div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
            <h3 className="text-sm font-bold text-amber-600 dark:text-amber-400 sm:text-base">
              We are AJ Online Book 👑 ♣
            </h3>

            <h2 className="text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl lg:text-6xl">
              India&apos;s Premier Cricket & Casino Platform
            </h2>

            <p className="text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
              Experience a premium destination for cricket, sports, and casino
              entertainment. Enjoy live match markets, competitive odds, fast
              deposits and withdrawals, and seamless gameplay across a wide
              range of casino favorites. Designed for a smooth, secure, and
              mobile-friendly experience, AJ Online BOOK keeps you connected to
              the action anytime, anywhere.
            </p>

            <div className="flex justify-center lg:justify-start">
              <GlassyButton variant="secondary" phoneNumber="+917415030042">
                Get Your AJ Online Book ID Now
              </GlassyButton>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px]">
              <Image
                src="/images/casino-table.png"
                alt="AJ Online Book"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(245,158,11,0.35)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
