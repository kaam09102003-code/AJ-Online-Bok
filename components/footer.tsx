"use client";

export function Footer() {
  const WHATSAPP_NUMBER = "+918982050056";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const openWhatsApp = 918982050056) => {
    const url = `https://wa.me/${7415030042}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900 transition-colors duration-300 dark:border-white/10 dark:bg-[#0a0712] dark:text-white">
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-amber-500">
              AJ Online Book
            </h3>

            <p className="max-w-xs text-sm leading-7 text-gray-600 dark:text-gray-400">
              India&apos;s Premier Cricket & Casino Platform with secure deposits,
              instant withdrawals, premium gaming, and 24×7 customer support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-sm text-gray-600 transition hover:text-amber-500 dark:text-gray-400"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-gray-600 transition hover:text-amber-500 dark:text-gray-400"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("how")}
                  className="text-sm text-gray-600 transition hover:text-amber-500 dark:text-gray-400"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
              Support
            </h4>

            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hello! I would like to contact AJ Online Book support."
                    )
                  }
                  className="text-sm text-gray-600 transition hover:text-green-500 dark:text-gray-400"
                >
                  Contact Us
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hi! I have a few questions regarding your platform."
                    )
                  }
                  className="text-sm text-gray-600 transition hover:text-green-500 dark:text-gray-400"
                >
                  FAQ
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hello! I need assistance with my account."
                    )
                  }
                  className="text-sm text-gray-600 transition hover:text-green-500 dark:text-gray-400"
                >
                  Help Center
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">
              Contact
            </h4>

            <button
              onClick={() =>
                openWhatsApp(
                  "Hello! I want to get my AJ Online Book ID."
                )
              }
              className="rounded-lg border border-green-500 px-5 py-3 text-sm font-medium text-green-600 transition hover:bg-green-500 hover:text-white dark:text-green-400"
            >
              WhatsApp Support <br />
              Available 24×7
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-6 dark:border-white/10">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2026 <span className="font-semibold text-amber-500">AJ Online Book</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
