import { ChevronRight } from "lucide-react";

const STEPS = [
  {
    num: "01.",
    icon: "https://media.holafly.com/public/illustrations/home/how-it-works-step-1.svg",
    text: (
      <>
        <strong>Find your destination</strong> and{" "}
        <strong>select the days</strong> for the data plan you need!
      </>
    ),
    link: { label: "Check compatibility list", href: "#" },
  },
  {
    num: "02.",
    icon: "https://media.holafly.com/public/illustrations/home/how-it-works-step-2.svg",
    text: (
      <>
        Install your eSIM{" "}
        <strong>using the setup guide in your email.</strong>
      </>
    ),
  },
  {
    num: "03.",
    icon: "https://media.holafly.com/public/illustrations/home/how-it-works-step-3.svg",
    text: (
      <>
        <strong>Turn on your eSIM at arrival</strong> and connect instantly.
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1440px] w-[90%] relative">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-20 my-20"
        style={{
          backgroundImage:
            "url('https://media.holafly.com/public/images/home/how-it-works-desktop.svg')",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Left column */}
        <div className="relative">
          <div className="flex flex-col items-start gap-3 py-5 text-holafly-dark">
            <h2 className="text-[28px] sm:text-4xl font-medium leading-[45px] text-left whitespace-pre-line">
              Enjoy unlimited data in 3 steps
            </h2>
            <img
              alt="How it works line"
              width={160}
              height={8}
              loading="lazy"
              src="https://media.holafly.com/public/illustrations/how-it-works-line.svg"
              className="w-40"
            />
          </div>
          <div className="absolute bottom-10 -left-5 hidden lg:block">
            <img
              alt="How it works"
              width={620}
              height={245}
              loading="lazy"
              src="https://media.holafly.com/public/images/home/how-it-works-image.webp?width=620&height=245&optimize=medium&fit=cover&quality=80&format=webp"
              className="w-full max-w-[672px] h-full"
            />
          </div>
        </div>

        {/* Right column: steps */}
        <div className="flex flex-col gap-2">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="flex items-center gap-6 w-full rounded-2xl border-2 border-[#fff7d1] bg-[#fffdf6] px-6 sm:px-10 py-4"
            >
              {/* Step number + icon */}
              <div className="flex items-center shrink-0">
                <span className="text-holafly-coral text-lg font-bold leading-[26px] mr-1">
                  {step.num}
                </span>
                <img
                  alt={`Step ${step.num}`}
                  width={80}
                  height={80}
                  loading="lazy"
                  src={step.icon}
                  className="w-[100px] h-[100px]"
                />
              </div>

              {/* Step text */}
              <div className="w-full">
                <div className="flex flex-col gap-2 text-holafly-dark">
                  <p>{step.text}</p>
                  {step.link && (
                    <div className="flex">
                      <a
                        href={step.link.href}
                        className="flex items-center gap-1 text-holafly-dark transition-colors hover:text-holafly-coral"
                      >
                        <p className="text-xs font-medium underline">
                          {step.link.label}
                        </p>
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
