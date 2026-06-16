import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Destinations", href: "/destinations" },
  { label: "What is an eSIM?", href: "/what-is-an-esim" },
  { label: "FAQs", href: "/faqs" },
  { label: "Plans", href: "/plans", badge: "New" },
  { label: "HolaCoins", href: "/holacoins" },
  { label: "Affiliates", href: "/affiliates" },
  { label: "For Business", href: "/for-business" },
];

const BANNERS = [
  {
    text: (
      <>
        <strong className="text-holafly-coral">
          New! Your Holafly eSIM now gets 1GB extra
        </strong>{" "}
        every month at no cost after your plan ends.
      </>
    ),
    gradient: "bg-gradient-to-r from-[#edf9fe] via-[#bfebff] to-[#fff7d1]",
  },
  {
    text: (
      <>
        Abroad for 30+ days? Discover our monthly plans to stay{" "}
        <strong className="text-holafly-coral">connected!</strong>
      </>
    ),
    gradient: "bg-gradient-to-br from-[#f2fdeb] to-[#e0f4fd]",
  },
];

export default function Header() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % BANNERS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const banner = BANNERS[bannerIndex];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-holafly-light transition-transform duration-300">
      {/* Announcement banner */}
      <div className={`${banner.gradient} overflow-hidden rounded-b-xl`}>
        <div className="mx-auto max-w-[1560px] flex items-center justify-center px-4 py-2 min-h-[36px]">
          <p className="text-center text-[13px] font-bold leading-5 text-holafly-dark sm:text-sm">
            {banner.text}
          </p>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-[1560px] w-[90%]">
        <div className="flex items-center justify-between h-[72px] px-6 relative">
          {/* Left: nav links (desktop) / hamburger (mobile) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-lg p-2 text-holafly-dark lg:hidden"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <nav className="hidden items-center gap-[17px] lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-holafly-dark transition-colors hover:text-holafly-coral h-16"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="rounded-full bg-[#ebf3ff] px-3 py-0.5 text-xs font-medium text-[#002968]">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center h-full py-2"
            aria-label="Holafly home"
          >
            <img
              src="https://media.holafly.com/public/logos/holafly.svg"
              alt="Holafly"
              className="w-[115px] h-auto"
            />
          </Link>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://esim.holafly.com/get-app/"
              className="hidden items-center justify-center rounded-xl bg-holafly-cta h-10 px-5 text-sm font-medium text-white transition-opacity hover:opacity-90 xl:inline-flex"
            >
              Get the App
            </a>

            <button
              type="button"
              aria-label="Language and currency"
              className="hidden items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-holafly-dark transition-colors hover:bg-holafly-light sm:inline-flex"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium whitespace-nowrap">
                EN - <span className="text-holafly-gray">USD ($)</span>
              </span>
            </button>

            <button
              type="button"
              aria-label="Search"
              className="inline-flex items-center justify-center rounded-xl p-2 text-holafly-dark transition-colors hover:bg-holafly-light"
            >
              <Search className="h-6 w-6" />
            </button>

            <button
              type="button"
              aria-label="Cart"
              className="relative inline-flex items-center justify-center rounded-xl p-2 text-holafly-dark transition-colors hover:bg-holafly-light"
            >
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-holafly-border bg-white lg:hidden">
          <nav className="mx-auto max-w-[1560px] flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-holafly-border px-2 py-4 text-[15px] font-medium text-holafly-dark transition-colors hover:bg-holafly-light"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="rounded-full bg-[#ebf3ff] px-3 py-0.5 text-xs font-medium text-[#002968]">
                    {link.badge}
                  </span>
                )}
                <ChevronDown className="h-5 w-5 -rotate-90 text-holafly-gray" />
              </Link>
            ))}
            <a
              href="https://esim.holafly.com/get-app/"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-holafly-cta px-5 py-3 text-base font-medium text-white"
            >
              Get the App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
