import { useEffect, useState } from "react";
import { fetchOneEntry, Content, isPreviewing } from "@builder.io/sdk-react";
import { builderComponents } from "../builder-registry";

import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PushToPlans from "@/components/PushToPlans";
import WhatIsEsim from "@/components/WhatIsEsim";
import HowItWorks from "@/components/HowItWorks";

const BUILDER_API_KEY = import.meta.env.VITE_PUBLIC_BUILDER_KEY as string;

export default function Index() {
  const [builderContent, setBuilderContent] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetchOneEntry({
      model: "page",
      apiKey: BUILDER_API_KEY,
      userAttributes: { urlPath: "/" },
    }).then((content) => {
      setBuilderContent(content);
      setChecked(true);
    });
  }, []);

  if (builderContent || isPreviewing()) {
    return (
      <Content
        model="page"
        content={builderContent}
        apiKey={BUILDER_API_KEY}
        customComponents={builderComponents}
      />
    );
  }

  if (!checked) return null;

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
