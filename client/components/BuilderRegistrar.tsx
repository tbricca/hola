import { useEffect } from "react";
import { isPreviewing, register } from "@builder.io/sdk-react";
import { builderComponents } from "../builder-registry";

export default function BuilderRegistrar() {
  useEffect(() => {
    if (!isPreviewing()) return;

    builderComponents.forEach((comp) => {
      register("insertMenu", {
        name: comp.name,
        items: [
          {
            name: comp.name,
            item: {
              "@type": "@builder.io/sdk:Element",
              component: {
                name: comp.name,
                options: {},
              },
            },
          },
        ],
      });
    });
  }, []);

  return null;
}
