import { Link } from "react-router-dom";
import { MapPin, X as XIcon } from "lucide-react";

export interface PushToPlansProps {
  heading?: string;
  subheading?: string;
  /** HTML string — supports <strong> tags for bold text */
  bodyText?: string;
  destination1Text?: string;
  destination2Text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  illustrationSrc?: string;
  logoSrc?: string;
  backgroundImageSrc?: string;
  backgroundColor?: string;
}

const DEFAULT_BODY_TEXT =
  'Our <strong>monthly and yearly</strong> plans get you connected anywhere in the world as long as you want. Get started for just <strong>$49.90/month</strong> —plan big, <strong>spend less,</strong> and travel with peace of mind.';

export default function PushToPlans({
  heading = "Abroad for 30+ days?",
  subheading = "Subscribe and save money overseas!",
  bodyText = DEFAULT_BODY_TEXT,
  destination1Text = "160 destinations",
  destination2Text = "Cancel anytime",
  ctaLabel = "Check plans",
  ctaHref = "/plans",
  illustrationSrc = "https://media.holafly.com/public/images/home/fig-banner-push-to-plans-desktop.png?width=600&height=620&optimize=medium&fit=cover&quality=80&format=webp",
  logoSrc = "https://media.holafly.com/public/logos/holafly-plans.svg",
  backgroundImageSrc = "https://media.holafly.com/public/images/plans/push-to-plans-cloud-bg.webp",
  backgroundColor = "#dcf4ff",
}: PushToPlansProps) {
  return (
    <section className="mx-auto max-w-[1440px] w-[90%] mt-[8%]">
      <div
        className="relative flex flex-col justify-center items-center w-full rounded-3xl overflow-hidden p-4"
        style={{
          backgroundColor,
          backgroundImage: `image-set(url('${backgroundImageSrc}') 1dppx)`,
          backgroundPosition: "100% 15%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "25%",
        }}
      >
        <div className="relative flex flex-col items-center w-full">
          <div className="flex items-center w-full flex-col md:flex-row">
            {/* Left: illustration */}
            <span className="-mt-0.5 hidden md:block">
              <img
                alt={heading}
                width={622}
                height={380}
                loading="lazy"
                src={illustrationSrc}
                className="w-[433px] max-w-full -mt-3"
              />
            </span>

            {/* Right: content */}
            <div className="flex flex-col items-start text-holafly-dark pl-0 md:pl-16 w-full md:w-1/2 max-w-[896px] py-6 md:py-0">
              <div className="flex flex-col w-full order-1">
                <img
                  alt="Holafly Plans"
                  width={134}
                  height={26}
                  loading="lazy"
                  src={logoSrc}
                  className="w-32 mb-8 mr-auto"
                />
                <h2 className="text-[28px] sm:text-4xl font-bold leading-[45px] mb-2 text-left w-full max-w-[768px]">
                  {heading}
                </h2>
                <h3 className="text-xl sm:text-2xl font-medium leading-7 mb-3 text-left w-full max-w-[672px]">
                  {subheading}
                </h3>
              </div>

              <p
                className="leading-[26px] mt-3 mb-5 max-w-[576px] text-left w-full order-2"
                dangerouslySetInnerHTML={{ __html: bodyText }}
              />

              <ul className="flex items-center py-3.5 order-3 list-none">
                <li className="flex items-center gap-2 pr-3.5 border-r border-holafly-dark text-xl leading-7">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <span>{destination1Text}</span>
                </li>
                <li className="flex items-center gap-2 pl-3.5 text-xl leading-7">
                  <XIcon className="h-5 w-5 shrink-0" />
                  <span>{destination2Text}</span>
                </li>
              </ul>

              <Link
                to={ctaHref}
                className="inline-flex items-center justify-center rounded-xl bg-holafly-cta text-white font-medium leading-6 px-5 py-3 my-2 w-fit transition-opacity duration-300 hover:opacity-90"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
