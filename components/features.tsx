"use client";

import {
  RadioTower,
  Headset,
  BadgeCheck,
  Wallet,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: RadioTower,
    title: "ONLINE ID",
    description:
      "Obtain your online cricket & casino ID instantly. Message us on WhatsApp and start playing within minutes.",
  },
  {
    icon: Headset,
    title: "24/7 SUPPORT",
    description:
      "Our support team is available around the clock to assist you with deposits, withdrawals, and account queries.",
  },
  {
    icon: BadgeCheck,
    title: "100% TRUSTED SERVICE",
    description:
      "Built on transparency and trust, we provide a secure and reliable platform for every player.",
  },
  {
    icon: Wallet,
    title: "INSTANT WITHDRAWAL",
    description:
      "Experience lightning-fast deposits and withdrawals with secure payment processing.",
  },
  {
    icon: CreditCard,
    title: "MULTIPLE PAYMENT OPTIONS",
    description:
      "UPI, Net Banking, Bank Transfer, Wallets and many more payment methods supported.",
  },
  {
    icon: ShieldCheck,
    title: "HIGH SECURITY",
    description:
      "Advanced encryption and secure payment gateways keep your information safe at all times.",
  },
];

export function Features() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#140a23] py-16 lg:py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1033] via-[#160b28] to-[#12091f]" />

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/20 blur-[140px]" />

      <div className="relative container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold text-white md:text-5xl"
        >
          Why <span className="text-yellow-400">Choose Us</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-pink-300/30
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:border-yellow-400
                hover:shadow-[0_0_35px_rgba(255,215,0,.35)]
              "
              >
                {/* Glow */}

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/20" />

                <div className="relative z-10 flex items-start gap-6">
                  <div
                    className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/20
                    shadow-[0_0_20px_rgba(255,255,255,.15)]
                  "
                  >
                    <Icon
                      size={42}
                      className="text-white transition group-hover:text-yellow-400"
                    />
                  </div>

                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-yellow-400">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}