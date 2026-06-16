/**
 * Builder.io gen2 component registry with inline localization support.
 *
 * Text fields are localizable by default (no `localized` prop needed).
 * Non-text fields (images, URLs, colors, structural config) are marked
 * `localized: false` unless they should vary by locale (e.g. hero image
 * with locale-specific text baked in).
 */

import { register } from "@builder.io/sdk-react";
import type { RegisteredComponent } from "@builder.io/sdk-react";

import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PushToPlans from "@/components/PushToPlans";
import WhatIsEsim from "@/components/WhatIsEsim";
import HowItWorks from "@/components/HowItWorks";
import Header from "@/components/Header";

register("editor.settings", {
  designTokens: {
    colors: [
      { name: "Green (Primary CTA)", value: "#48EC86" },
      { name: "Coral (Accent)", value: "#E6485C" },
      { name: "Dark (Text)", value: "#292B2E" },
      { name: "Gray (Muted)", value: "#56575A" },
      { name: "Light (Background)", value: "#F8F8FB" },
      { name: "Border", value: "#E4E6EA" },
      { name: "White", value: "#ffffff" },
    ],
    fontSizes: [
      { name: "XS (12px)", value: "12px" },
      { name: "SM (14px)", value: "14px" },
      { name: "Base (16px)", value: "16px" },
      { name: "LG (18px)", value: "18px" },
      { name: "XL (20px)", value: "20px" },
      { name: "2XL (24px)", value: "24px" },
      { name: "3XL (28px)", value: "28px" },
      { name: "4XL (36px)", value: "36px" },
      { name: "5XL (48px)", value: "48px" },
    ],
  },
});

export const builderComponents: RegisteredComponent[] = [
  {
    component: HeroSection,
    name: "Hero section",
    inputs: [
      // Text fields — localizable by default
      { name: "eyebrow", type: "string", defaultValue: "eSIM for international travel", helperText: "Small label above the main headline" },
      { name: "titleStart", type: "string", defaultValue: "Stay connected", helperText: "First part of the headline" },
      { name: "titleHighlight", type: "string", defaultValue: "wherever", helperText: "Highlighted (coral) word" },
      { name: "titleEnd", type: "string", defaultValue: "you go", helperText: "Text after the highlighted word" },
      { name: "description", type: "longText", defaultValue: "Get Unlimited Data and total peace of mind on every trip with the world's most trusted travel eSIM." },
      { name: "features", type: "list", defaultValue: [{ value: "Unlimited data" }, { value: "No roaming charges" }, { value: "Keep your physical SIM" }, { value: "Easy installation" }], subFields: [{ name: "value", type: "string", defaultValue: "Feature" }], helperText: "Rotating feature bullets" },
      { name: "findPlanLabel", type: "string", defaultValue: "Find your ideal plan" },
      { name: "searchPlaceholder", type: "string", defaultValue: "Where are you traveling?" },
      { name: "daysPlaceholder", type: "string", defaultValue: "For how many days?" },
      { name: "ctaLabel", type: "string", defaultValue: "Search plan" },
      // Image fields — localizable (hero image has baked-in locale text)
      { name: "heroImageSrc", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg", "gif"], defaultValue: "https://media.holafly.com/public/features/home/images/home-hero-en.png?width=460&height=630&optimize=medium&fit=cover&quality=80&format=webp", helperText: "Hero image (localizable — may contain locale-specific text)" },
      // Structural fields — NOT localizable
      { name: "backgroundImageSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/images/home/home-hero-bg.svg", helperText: "Background image" },
    ],
  },

  {
    component: TrustBar,
    name: "Trust bar",
    inputs: [
      // Text — localizable
      { name: "rating", type: "string", defaultValue: "4.7", localized: false, helperText: "Numeric rating (same across locales)" },
      { name: "ratingMax", type: "string", defaultValue: "5", localized: false },
      { name: "reviewCount", type: "string", defaultValue: "97,343+", localized: false, helperText: "Review count number" },
      { name: "platformName", type: "string", defaultValue: "TrustPilot" },
      // Image — not localizable
      { name: "starImageSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/images/common/trustpilot-star.png?width=40&height=40&optimize=medium&fit=cover&quality=80&format=webp" },
    ],
  },

  {
    component: PushToPlans,
    name: "Push to plans",
    inputs: [
      // Text — localizable
      { name: "heading", type: "string", defaultValue: "Abroad for 30+ days?", required: true },
      { name: "subheading", type: "string", defaultValue: "Subscribe and save money overseas!" },
      { name: "bodyText", type: "richText", defaultValue: "Our <strong>monthly and yearly</strong> plans get you connected anywhere in the world as long as you want. Get started for just <strong>$49.90/month</strong> —plan big, <strong>spend less,</strong> and travel with peace of mind." },
      { name: "destination1Text", type: "string", defaultValue: "160 destinations" },
      { name: "destination2Text", type: "string", defaultValue: "Cancel anytime" },
      { name: "ctaLabel", type: "string", defaultValue: "Check plans" },
      // URL — localizable (different locale landing pages)
      { name: "ctaHref", type: "url", defaultValue: "/plans" },
      // Images — not localizable
      { name: "illustrationSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/images/home/fig-banner-push-to-plans-desktop.png?width=600&height=620&optimize=medium&fit=cover&quality=80&format=webp" },
      { name: "logoSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/logos/holafly-plans.svg" },
      { name: "backgroundImageSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/images/plans/push-to-plans-cloud-bg.webp" },
      { name: "backgroundColor", type: "color", localized: false, defaultValue: "#dcf4ff" },
    ],
  },

  {
    component: WhatIsEsim,
    name: "What is esim",
    inputs: [
      // Text — localizable
      { name: "title", type: "string", defaultValue: "What is an eSIM?", required: true },
      { name: "description", type: "longText", defaultValue: "An eSIM is a virtual or digital SIM card that allows you to connect to mobile networks without a physical SIM card. You can store multiple eSIMs, accessing different carriers, numbers, and data plans—ideal for travel or everyday use. Activate it on your phone to get online in minutes." },
      { name: "features", type: "list", defaultValue: [{ value: "easy to use" }, { value: "easy to install" }, { value: "easy to enjoy" }], subFields: [{ name: "value", type: "string", defaultValue: "easy to use" }] },
      { name: "ctaLabel", type: "string", defaultValue: "More details" },
      { name: "ctaHref", type: "url", defaultValue: "https://esim.holafly.com/how-to/what-is-esim/" },
      // Images — not localizable
      { name: "desktopImageSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/images/home/whatsesim-tablet-desktop.webp?width=526&height=366&optimize=medium&fit=cover&quality=80&format=webp" },
      { name: "mobileImageSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/images/home/whatsesim-mobile.webp?width=387&height=220&optimize=medium&fit=cover&quality=80&format=webp" },
      { name: "backgroundShapeSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/illustrations/home/whatsesim-shape-yellowbkg-tablet.webp" },
    ],
  },

  {
    component: HowItWorks,
    name: "How it works",
    inputs: [
      // Text — localizable
      { name: "title", type: "string", defaultValue: "Enjoy unlimited data in 3 steps", required: true },
      {
        name: "steps",
        type: "list",
        defaultValue: [
          { num: "01.", iconSrc: "https://media.holafly.com/public/illustrations/home/how-it-works-step-1.svg", text: "<strong>Find your destination</strong> and <strong>select the days</strong> for the data plan you need!", linkLabel: "Check compatibility list", linkHref: "#" },
          { num: "02.", iconSrc: "https://media.holafly.com/public/illustrations/home/how-it-works-step-2.svg", text: "Install your eSIM <strong>using the setup guide in your email.</strong>" },
          { num: "03.", iconSrc: "https://media.holafly.com/public/illustrations/home/how-it-works-step-3.svg", text: "<strong>Turn on your eSIM at arrival</strong> and connect instantly." },
        ],
        subFields: [
          { name: "num", type: "string", defaultValue: "01.", localized: false },
          { name: "iconSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/illustrations/home/how-it-works-step-1.svg" },
          { name: "text", type: "richText", defaultValue: "Step description" },
          { name: "linkLabel", type: "string", defaultValue: "" },
          { name: "linkHref", type: "url", defaultValue: "#", localized: false },
        ],
      },
      // Images — not localizable
      { name: "backgroundImageSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/images/home/how-it-works-desktop.svg" },
      { name: "bottomImageSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/images/home/how-it-works-image.webp?width=620&height=245&optimize=medium&fit=cover&quality=80&format=webp" },
      { name: "decorativeLineSrc", type: "file", localized: false, allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://media.holafly.com/public/illustrations/how-it-works-line.svg" },
    ],
  },

  {
    component: Header,
    name: "Header",
    inputs: [
      // Text — localizable
      { name: "ctaLabel", type: "string", defaultValue: "Get the App" },
      // URL — localizable (different app store links per locale)
      { name: "ctaHref", type: "url", defaultValue: "https://esim.holafly.com/get-app/" },
      {
        name: "banners",
        type: "list",
        defaultValue: [
          { text: "New! Your Holafly eSIM now gets 1GB extra every month at no cost after your plan ends.", gradient: "bg-gradient-to-r from-[#edf9fe] via-[#bfebff] to-[#fff7d1]" },
          { text: "Abroad for 30+ days? Discover our monthly plans to stay connected!", gradient: "bg-gradient-to-br from-[#f2fdeb] to-[#e0f4fd]" },
        ],
        subFields: [
          { name: "text", type: "string", defaultValue: "Banner text" },
          { name: "gradient", type: "string", defaultValue: "bg-gradient-to-r from-[#edf9fe] via-[#bfebff] to-[#fff7d1]", localized: false },
        ],
      },
      {
        name: "navLinks",
        type: "list",
        defaultValue: [
          { label: "Destinations", href: "/destinations" },
          { label: "What is an eSIM?", href: "/what-is-an-esim" },
          { label: "FAQs", href: "/faqs" },
          { label: "Plans", href: "/plans", badge: "New" },
          { label: "HolaCoins", href: "/holacoins" },
          { label: "Affiliates", href: "/affiliates" },
          { label: "For Business", href: "/for-business" },
        ],
        subFields: [
          { name: "label", type: "string", defaultValue: "Nav item", required: true },
          { name: "href", type: "url", defaultValue: "/", required: true, localized: false },
          { name: "badge", type: "string", defaultValue: "" },
        ],
      },
    ],
  },
];
