import { Content, isPreviewing } from "@builder.io/sdk-react";
import { builderComponents } from "../builder-registry";

const BUILDER_API_KEY = import.meta.env.VITE_PUBLIC_BUILDER_KEY as string;

export default function BuilderRegistrar() {
  if (!isPreviewing()) return null;

  return (
    <Content
      model="page"
      content={null}
      apiKey={BUILDER_API_KEY}
      customComponents={builderComponents}
    />
  );
}
