import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PushToPlans from "@/components/PushToPlans";
import WhatIsEsim from "@/components/WhatIsEsim";
import HowItWorks from "@/components/HowItWorks";

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TrustBar />
      <PushToPlans />
      <WhatIsEsim />
      <HowItWorks />
    </main>
  );
}
