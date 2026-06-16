import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchOneEntry, Content, isPreviewing } from "@builder.io/sdk-react";
import { builderComponents } from "../builder-registry";

const BUILDER_MODELS = [
  "page",
  "customer-pages",
  "merch-pages",
  "landing-pages",
] as const;

const BUILDER_API_KEY = import.meta.env.VITE_PUBLIC_BUILDER_KEY as string;

type FoundContent = {
  model: string;
  result: unknown;
};

export default function BuilderPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState<FoundContent | null>(null);
  const [loading, setLoading] = useState(true);

  const locale = searchParams.get("locale") || "en";

  useEffect(() => {
    setLoading(true);
    setContent(null);

    const urlPath = location.pathname;

    const fetchContent = async () => {
      for (const model of BUILDER_MODELS) {
        const result = await fetchOneEntry({
          model,
          apiKey: BUILDER_API_KEY,
          locale,
          userAttributes: { urlPath, locale },
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
  }, [location.pathname, locale]);

  if (loading) return null;

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
      locale={locale}
      customComponents={builderComponents}
    />
  );
}
