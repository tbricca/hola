import { Link } from "react-router-dom";
import { MapPin, X as XIcon } from "lucide-react";

export default function PushToPlans() {
  return (
    <section className="mx-auto max-w-[1440px] w-[90%] mt-[8%]">
      <div
        className="relative flex flex-col justify-center items-center w-full rounded-3xl overflow-hidden p-4"
        style={{
          backgroundColor: "#dcf4ff",
          backgroundImage:
            "image-set(url('https://media.holafly.com/public/images/plans/push-to-plans-cloud-bg.webp') 1dppx, url('https://media.holafly.com/public/images/plans/push-to-plans-cloud-bg_2x.webp') 2dppx)",
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
                alt="Abroad for 30+ days?"
                width={622}
                height={380}
                loading="lazy"
                src="https://media.holafly.com/public/images/home/fig-banner-push-to-plans-desktop.png?width=600&height=620&optimize=medium&fit=cover&quality=80&format=webp"
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
                  src="https://media.holafly.com/public/logos/holafly-plans.svg"
                  className="w-32 mb-8 mr-auto"
                />
                <h2 className="text-[28px] sm:text-4xl font-bold leading-[45px] mb-2 text-left w-full max-w-[768px]">
                  Abroad for 30+ days?
                </h2>
                <h3 className="text-xl sm:text-2xl font-medium leading-7 mb-3 text-left w-full max-w-[672px]">
                  Subscribe and save money overseas!
                </h3>
              </div>

              <p className="leading-[26px] mt-3 mb-5 max-w-[576px] text-left w-full order-2">
                Our <strong>monthly and yearly</strong> plans get you connected
                anywhere in the world as long as you want. Get started for just{" "}
                <strong>$49.90/month</strong> —plan big,{" "}
                <strong>spend less,</strong> and travel with peace of mind.
              </p>

              <ul className="flex items-center py-3.5 order-3 list-none">
                <li className="flex items-center gap-2 pr-3.5 border-r border-holafly-dark text-xl leading-7">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <span>160 destinations</span>
                </li>
                <li className="flex items-center gap-2 pl-3.5 text-xl leading-7">
                  <XIcon className="h-5 w-5 shrink-0" />
                  <span>Cancel anytime</span>
                </li>
              </ul>

              <Link
                to="/plans"
                className="inline-flex items-center justify-center rounded-xl bg-holafly-cta text-white font-medium leading-6 px-5 py-3 my-2 w-fit transition-opacity duration-300 hover:opacity-90"
              >
                Check plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
