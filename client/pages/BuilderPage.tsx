import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchOneEntry, Content, isPreviewing } from "@builder.io/sdk-react";
import { builderComponents } from "../builder-registry";

// All page-kind models in this Builder space, ordered by published-entry count
// (descending). The first non-null fetchOneEntry result wins.
const BUILDER_MODELS = [
  "page",           // 21 published entries
  "customer-pages", // 4 published entries
  "merch-pages",    // 4 published entries
  "landing-pages",  // 3 published entries
] as const;

const BUILDER_API_KEY = import.meta.env.VITE_PUBLIC_BUILDER_KEY as string;

type FoundContent = {
  model: string;
  result: unknown;
};

export default function BuilderPage() {
  const location = useLocation();
  const [content, setContent] = useState<FoundContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setContent(null);

    const urlPath = location.pathname;

    const fetchContent = async () => {
      for (const model of BUILDER_MODELS) {
        const result = await fetchOneEntry({
          model,
          apiKey: BUILDER_API_KEY,
          userAttributes: { urlPath },
        });
        if (result) {
          setContent({ model, result });
          setLoading(false);
          return;
        }
      }
      setLoading(false);
    };

    fetchContent();
  }, [location.pathname]);

  if (loading) {
    // Render nothing while resolving to avoid a flash of 404
    return null;
  }

  if (!content && !isPreviewing()) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-holafly-dark">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg text-holafly-gray">Page not found</p>
      </div>
    );
  }

  const model = content?.model ?? "page";
  const result = content?.result ?? null;

  return (
    <Content
      model={model}
      content={result}
      apiKey={BUILDER_API_KEY}
      customComponents={builderComponents}
    />
  );
}
