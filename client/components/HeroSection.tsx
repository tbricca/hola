import { useState } from "react";
import { Search, Calendar, Check } from "lucide-react";

const DEFAULT_FEATURES = [
  "Unlimited data",
  "No roaming charges",
  "Keep your physical SIM",
  "Easy installation",
];

export interface HeroSectionProps {
  eyebrow?: string;
  titleStart?: string;
  titleHighlight?: string;
  titleEnd?: string;
  description?: string;
  features?: string[] | { value: string }[];
  heroImageSrc?: string;
  backgroundImageSrc?: string;
  findPlanLabel?: string;
  searchPlaceholder?: string;
  daysPlaceholder?: string;
  ctaLabel?: string;
}

export default function HeroSection({
  eyebrow = "eSIM for international travel",
  titleStart = "Stay connected",
  titleHighlight = "wherever",
  titleEnd = "you go",
  description = "Get Unlimited Data and total peace of mind on every trip with the world's most trusted travel eSIM.",
  features = DEFAULT_FEATURES,
  heroImageSrc = "https://media.holafly.com/public/features/home/images/home-hero-en.png?width=460&height=630&optimize=medium&fit=cover&quality=80&format=webp",
  backgroundImageSrc = "https://media.holafly.com/public/images/home/home-hero-bg.svg",
  findPlanLabel = "Find your ideal plan",
  searchPlaceholder = "Where are you traveling?",
  daysPlaceholder = "For how many days?",
  ctaLabel = "Search plan",
}: HeroSectionProps) {
  const normalizedFeatures = features.map((f) =>
    typeof f === "string" ? f : f.value
  );
  const [visibleFeature, setVisibleFeature] = useState(0);

  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: `url('${backgroundImageSrc}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1440px] w-[90%] py-6">
        <div className="mx-auto flex w-[85%] items-center flex-col lg:flex-row">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-2 text-holafly-dark lg:-mt-16">
            <h1 className="text-base leading-[22px] mb-2 w-full text-left">
              {eyebrow}
            </h1>

            <p className="text-[40px] sm:text-[48px] font-medium leading-[48px] sm:leading-[56px] text-left max-w-[496px]">
              {titleStart}{" "}
              <span className="text-holafly-coral">{titleHighlight}</span>
              {titleEnd ? ` ${titleEnd}` : ""}
            </p>

            <p className="text-base leading-[22px] mt-3 mb-6 text-left text-balance">
              {description}
            </p>

            {/* Features & search form container */}
            <div className="w-[87%]">
              {/* Rotating features */}
              <div className="h-7 mb-6 overflow-hidden relative">
                <div className="flex flex-col h-full">
                  {normalizedFeatures.map((feature, i) => (
                    <div
                      key={feature}
                      className={`flex items-center gap-2.5 min-h-[28px] select-none transition-opacity duration-300 ${
                        i === visibleFeature % normalizedFeatures.length
                          ? "opacity-100"
                          : "opacity-0 absolute"
                      }`}
                    >
                      <span className="text-[#32A45E] text-[22px] font-medium shrink-0">
                        <Check className="h-6 w-6" />
                      </span>
                      <h3 className="text-[22px] font-medium leading-[30.8px] text-center text-holafly-dark">
                        {feature}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Search form card */}
              <div className="w-[80%]">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-bold leading-5 text-holafly-dark mb-4">
                    {findPlanLabel}
                  </p>

                  {/* Search input */}
                  <div className="relative">
                    <div className="flex items-center gap-2 border border-holafly-border rounded-xl h-12 px-4 bg-white">
                      <Search className="h-6 w-6 text-holafly-dark shrink-0" />
                      <div className="w-px h-3 bg-holafly-gray rounded-full" />
                      <input
                        type="text"
                        placeholder={searchPlaceholder}
                        className="flex-1 bg-transparent border-none outline-none text-base leading-6 text-holafly-dark placeholder:text-holafly-gray"
                      />
                    </div>
                  </div>

                  {/* Date picker button */}
                  <button
                    type="button"
                    className="flex items-center gap-2 border border-holafly-border rounded-xl h-12 px-4 bg-white transition-colors hover:border-holafly-green"
                  >
                    <Calendar className="h-6 w-6 text-holafly-dark" />
                    <div className="w-px h-3 bg-holafly-gray rounded-full" />
                    <p className="text-holafly-gray text-left w-full">
                      {daysPlaceholder}
                    </p>
                  </button>

                  {/* Search CTA */}
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-xl bg-holafly-green w-full py-3 px-5 text-base font-medium text-holafly-dark transition-colors hover:bg-[#3dd878]"
                  >
                    {ctaLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="flex-1 relative z-10 -mt-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              alt="Home Hero"
              width={460}
              height={630}
              loading="eager"
              src={heroImageSrc}
              className="max-h-[640px] max-w-full object-contain ml-auto"
            />
          </div>
        </div>
      </div>

      {/* Wave at bottom */}
      <div className="relative -mt-16">
        <img
          src="https://media.holafly.com/public/images/home/product-wave.svg"
          alt=""
          className="w-full hidden"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
