import { Check } from "lucide-react";

const DEFAULT_FEATURES = ["easy to use", "easy to install", "easy to enjoy"];

export interface WhatIsEsimProps {
  title?: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  desktopImageSrc?: string;
  mobileImageSrc?: string;
  backgroundShapeSrc?: string;
}

export default function WhatIsEsim({
  title = "What is an eSIM?",
  description = "An eSIM is a virtual or digital SIM card that allows you to connect to mobile networks without a physical SIM card. You can store multiple eSIMs, accessing different carriers, numbers, and data plans—ideal for travel or everyday use. Activate it on your phone to get online in minutes.",
  features = DEFAULT_FEATURES,
  ctaLabel = "More details",
  ctaHref = "https://esim.holafly.com/how-to/what-is-esim/",
  desktopImageSrc = "https://media.holafly.com/public/images/home/whatsesim-tablet-desktop.webp?width=526&height=366&optimize=medium&fit=cover&quality=80&format=webp",
  mobileImageSrc = "https://media.holafly.com/public/images/home/whatsesim-mobile.webp?width=387&height=220&optimize=medium&fit=cover&quality=80&format=webp",
  backgroundShapeSrc = "https://media.holafly.com/public/illustrations/home/whatsesim-shape-yellowbkg-tablet.webp",
}: WhatIsEsimProps) {
  return (
    <section className="mx-auto max-w-[1440px] w-[90%] my-20 overflow-hidden lg:overflow-visible">
      <div className="relative w-full overflow-visible">
        {/* Main card */}
        <div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-3xl py-10 lg:py-[60px] px-6 sm:px-10 lg:pl-20 lg:pr-[300px] w-full"
          style={{ backgroundColor: "#fdf3ee" }}
        >
          {/* Background shape */}
          <div
            className="absolute bottom-[-4px] left-0 w-full h-[81%] z-0 hidden lg:block"
            style={{
              backgroundImage: `url('${backgroundShapeSrc}')`,
              backgroundPosition: "0px 100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />

          {/* Text content */}
          <div className="relative z-[1] col-span-1">
            <h2 className="text-[36px] sm:text-[48px] font-medium leading-[40px] mb-4 text-holafly-dark">
              {title}
            </h2>

            <div className="mt-5 max-w-[510px] relative z-[1]">
              <p className="text-holafly-dark leading-[22px] mb-4">
                {description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  {features.map((feature, i) => (
                    <div key={feature} className="flex items-center gap-0">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-6 h-6 mr-1">
                          <Check className="h-5 w-5 text-holafly-dark" />
                        </div>
                        <span className="text-holafly-dark leading-[22px]">
                          {feature}
                        </span>
                      </div>
                      {i < features.length - 1 && (
                        <div className="w-px h-4 bg-holafly-gray mx-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-fit mt-8">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="flex items-center justify-center rounded-xl bg-holafly-cta text-white font-medium leading-6 px-5 py-3 w-full transition-opacity duration-300 hover:opacity-90"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>

        {/* Desktop image — positioned outside card so it's not clipped by rounded corners */}
        <div className="hidden lg:block absolute right-[-50px] top-[43%] -translate-y-1/2 w-[526px] z-[2]">
          <div className="relative h-[320px] w-full">
            <img
              alt={title}
              width={526}
              height={366}
              loading="lazy"
              src={desktopImageSrc}
              className="absolute w-[526px] h-[366px] object-contain"
            />
          </div>
        </div>

        {/* Mobile image */}
        <div className="lg:hidden mt-4 flex justify-center">
          <img
            alt={title}
            width={387}
            height={220}
            loading="lazy"
            src={mobileImageSrc}
            className="w-full max-w-[387px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
