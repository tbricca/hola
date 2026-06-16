/**
 * Builder.io gen2 component registry
 *
 * In @builder.io/sdk-react (gen2), components are registered by passing a
 * `customComponents` array to the <Content> component — there is no global
 * Builder.registerComponent(). This file exports that array so it can be
 * imported wherever <Content> is rendered.
 *
 * Also exports `builderDesignTokens` for `register("editor.settings", ...)`.
 */

import { register } from "@builder.io/sdk-react";
import type { RegisteredComponent } from "@builder.io/sdk-react";

// ─── Component imports ────────────────────────────────────────────────────────
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PushToPlans from "@/components/PushToPlans";
import WhatIsEsim from "@/components/WhatIsEsim";
import HowItWorks from "@/components/HowItWorks";
import Header from "@/components/Header";

// ─── Design tokens (registered once on module load) ───────────────────────────
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

// ─── Component registry (pass as `customComponents` to <Content>) ─────────────
export const builderComponents: RegisteredComponent[] = [
  // ── HeroSection ── client/components/HeroSection.tsx ──────────────────────
  {
    component: HeroSection,
    name: "HeroSection",
    inputs: [
      {
        name: "eyebrow",
        type: "string",
        defaultValue: "eSIM for international travel",
        helperText: "Small label above the main headline",
      },
      {
        name: "titleStart",
        type: "string",
        defaultValue: "Stay connected",
        helperText: "First part of the main headline (before the highlighted word)",
      },
      {
        name: "titleHighlight",
        type: "string",
        defaultValue: "wherever",
        helperText: "Highlighted (coral) word in the main headline",
      },
      {
        name: "titleEnd",
        type: "string",
        defaultValue: "you go",
        helperText: "Remaining text after the highlighted word",
      },
      {
        name: "description",
        type: "longText",
        defaultValue:
          "Get Unlimited Data and total peace of mind on every trip with the world's most trusted travel eSIM.",
      },
      {
        name: "features",
        type: "list",
        defaultValue: [
          { value: "Unlimited data" },
          { value: "No roaming charges" },
          { value: "Keep your physical SIM" },
          { value: "Easy installation" },
        ],
        subFields: [{ name: "value", type: "string", defaultValue: "Feature" }],
        helperText: "Rotating feature list shown below the description",
      },
      {
        name: "heroImageSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg", "gif"],
        defaultValue:
          "https://media.holafly.com/public/features/home/images/home-hero-en.png?width=460&height=630&optimize=medium&fit=cover&quality=80&format=webp",
        helperText: "Person/phone image on the right side of the hero",
      },
      {
        name: "backgroundImageSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/images/home/home-hero-bg.svg",
        helperText: "Full-width background image / gradient of the hero section",
      },
      {
        name: "findPlanLabel",
        type: "string",
        defaultValue: "Find your ideal plan",
        helperText: "Label above the search inputs",
      },
      {
        name: "searchPlaceholder",
        type: "string",
        defaultValue: "Where are you traveling?",
      },
      {
        name: "daysPlaceholder",
        type: "string",
        defaultValue: "For how many days?",
      },
      {
        name: "ctaLabel",
        type: "string",
        defaultValue: "Search plan",
        helperText: "Text on the green search button",
      },
    ],
  },

  // ── TrustBar ── client/components/TrustBar.tsx ────────────────────────────
  {
    component: TrustBar,
    name: "TrustBar",
    inputs: [
      {
        name: "rating",
        type: "string",
        defaultValue: "4.7",
        helperText: "Numeric rating displayed (e.g. 4.7)",
      },
      {
        name: "ratingMax",
        type: "string",
        defaultValue: "5",
      },
      {
        name: "starImageSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/images/common/trustpilot-star.png?width=40&height=40&optimize=medium&fit=cover&quality=80&format=webp",
        helperText: "Star icon image next to the rating",
      },
      {
        name: "reviewCount",
        type: "string",
        defaultValue: "97,343+",
        helperText: "Number of reviews (displayed as text, e.g. 97,343+)",
      },
      {
        name: "platformName",
        type: "string",
        defaultValue: "TrustPilot",
        helperText: "Review platform name (shown as bold underlined link text)",
      },
    ],
  },

  // ── PushToPlans ── client/components/PushToPlans.tsx ──────────────────────
  {
    component: PushToPlans,
    name: "PushToPlans",
    inputs: [
      {
        name: "heading",
        type: "string",
        defaultValue: "Abroad for 30+ days?",
        required: true,
      },
      {
        name: "subheading",
        type: "string",
        defaultValue: "Subscribe and save money overseas!",
      },
      {
        name: "bodyText",
        type: "richText",
        defaultValue:
          "Our <strong>monthly and yearly</strong> plans get you connected anywhere in the world as long as you want. Get started for just <strong>$49.90/month</strong> —plan big, <strong>spend less,</strong> and travel with peace of mind.",
        helperText: "Supports bold (<strong>) HTML tags",
      },
      {
        name: "destination1Text",
        type: "string",
        defaultValue: "160 destinations",
      },
      {
        name: "destination2Text",
        type: "string",
        defaultValue: "Cancel anytime",
      },
      {
        name: "ctaLabel",
        type: "string",
        defaultValue: "Check plans",
      },
      {
        name: "ctaHref",
        type: "url",
        defaultValue: "/plans",
      },
      {
        name: "illustrationSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/images/home/fig-banner-push-to-plans-desktop.png?width=600&height=620&optimize=medium&fit=cover&quality=80&format=webp",
        helperText: "Large illustration shown on the left (desktop only)",
      },
      {
        name: "logoSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue: "https://media.holafly.com/public/logos/holafly-plans.svg",
        helperText: "Holafly Plans logo shown above the heading",
      },
      {
        name: "backgroundImageSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/images/plans/push-to-plans-cloud-bg.webp",
        helperText: "Cloud background image on the right side of the card",
      },
      {
        name: "backgroundColor",
        type: "color",
        defaultValue: "#dcf4ff",
        helperText: "Card background color",
      },
    ],
  },

  // ── WhatIsEsim ── client/components/WhatIsEsim.tsx ────────────────────────
  {
    component: WhatIsEsim,
    name: "WhatIsEsim",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "What is an eSIM?",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        defaultValue:
          "An eSIM is a virtual or digital SIM card that allows you to connect to mobile networks without a physical SIM card. You can store multiple eSIMs, accessing different carriers, numbers, and data plans—ideal for travel or everyday use. Activate it on your phone to get online in minutes.",
      },
      {
        name: "features",
        type: "list",
        defaultValue: [
          { value: "easy to use" },
          { value: "easy to install" },
          { value: "easy to enjoy" },
        ],
        subFields: [
          { name: "value", type: "string", defaultValue: "easy to use" },
        ],
        helperText: "Short feature tags shown as a horizontal pill list",
      },
      {
        name: "ctaLabel",
        type: "string",
        defaultValue: "More details",
      },
      {
        name: "ctaHref",
        type: "url",
        defaultValue: "https://esim.holafly.com/how-to/what-is-esim/",
      },
      {
        name: "desktopImageSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/images/home/whatsesim-tablet-desktop.webp?width=526&height=366&optimize=medium&fit=cover&quality=80&format=webp",
        helperText: "Tablet/phone image shown on desktop (floats to the right)",
      },
      {
        name: "mobileImageSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/images/home/whatsesim-mobile.webp?width=387&height=220&optimize=medium&fit=cover&quality=80&format=webp",
        helperText: "Image shown on mobile devices (below the text card)",
      },
      {
        name: "backgroundShapeSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/illustrations/home/whatsesim-shape-yellowbkg-tablet.webp",
        helperText: "Decorative background shape inside the card (desktop)",
      },
    ],
  },

  // ── HowItWorks ── client/components/HowItWorks.tsx ────────────────────────
  {
    component: HowItWorks,
    name: "HowItWorks",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Enjoy unlimited data in 3 steps",
        required: true,
      },
      {
        name: "steps",
        type: "list",
        defaultValue: [
          {
            num: "01.",
            iconSrc:
              "https://media.holafly.com/public/illustrations/home/how-it-works-step-1.svg",
            text: "<strong>Find your destination</strong> and <strong>select the days</strong> for the data plan you need!",
            linkLabel: "Check compatibility list",
            linkHref: "#",
          },
          {
            num: "02.",
            iconSrc:
              "https://media.holafly.com/public/illustrations/home/how-it-works-step-2.svg",
            text: "Install your eSIM <strong>using the setup guide in your email.</strong>",
          },
          {
            num: "03.",
            iconSrc:
              "https://media.holafly.com/public/illustrations/home/how-it-works-step-3.svg",
            text: "<strong>Turn on your eSIM at arrival</strong> and connect instantly.",
          },
        ],
        subFields: [
          {
            name: "num",
            type: "string",
            defaultValue: "01.",
            helperText: "Step number label (e.g. 01.)",
          },
          {
            name: "iconSrc",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
            defaultValue:
              "https://media.holafly.com/public/illustrations/home/how-it-works-step-1.svg",
            helperText: "Step illustration icon",
          },
          {
            name: "text",
            type: "richText",
            defaultValue:
              "Step description — supports <strong>bold</strong> text",
            helperText: "Step description. Supports <strong> HTML for bold.",
          },
          {
            name: "linkLabel",
            type: "string",
            defaultValue: "",
            helperText: "Optional link label (leave empty to hide link)",
          },
          {
            name: "linkHref",
            type: "url",
            defaultValue: "#",
            helperText: "Optional link URL",
          },
        ],
      },
      {
        name: "backgroundImageSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/images/home/how-it-works-desktop.svg",
        helperText: "Full section background image",
      },
      {
        name: "bottomImageSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/images/home/how-it-works-image.webp?width=620&height=245&optimize=medium&fit=cover&quality=80&format=webp",
        helperText: "Decorative image shown at the bottom-left (desktop)",
      },
      {
        name: "decorativeLineSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://media.holafly.com/public/illustrations/how-it-works-line.svg",
        helperText: "Decorative underline SVG below the section title",
      },
    ],
  },

  // ── Header ── client/components/Header.tsx ────────────────────────────────
  {
    component: Header,
    name: "Header",
    inputs: [
      {
        name: "ctaLabel",
        type: "string",
        defaultValue: "Get the App",
        helperText: "Label for the primary CTA button in the top-right",
      },
      {
        name: "ctaHref",
        type: "url",
        defaultValue: "https://esim.holafly.com/get-app/",
        helperText: "URL for the primary CTA button",
      },
      {
        name: "banners",
        type: "list",
        defaultValue: [
          {
            text: "New! Your Holafly eSIM now gets 1GB extra every month at no cost after your plan ends.",
            gradient:
              "bg-gradient-to-r from-[#edf9fe] via-[#bfebff] to-[#fff7d1]",
          },
          {
            text: "Abroad for 30+ days? Discover our monthly plans to stay connected!",
            gradient: "bg-gradient-to-br from-[#f2fdeb] to-[#e0f4fd]",
          },
        ],
        subFields: [
          {
            name: "text",
            type: "string",
            defaultValue: "Announcement banner text",
            helperText: "Text shown in the rotating banner",
          },
          {
            name: "gradient",
            type: "string",
            defaultValue:
              "bg-gradient-to-r from-[#edf9fe] via-[#bfebff] to-[#fff7d1]",
            helperText: "Tailwind gradient class for the banner background",
          },
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
          {
            name: "label",
            type: "string",
            defaultValue: "Nav item",
            required: true,
          },
          { name: "href", type: "url", defaultValue: "/", required: true },
          {
            name: "badge",
            type: "string",
            defaultValue: "",
            helperText:
              "Optional badge text (e.g. 'New'). Leave empty to hide.",
          },
        ],
      },
    ],
  },
];
