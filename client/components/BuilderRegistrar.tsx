import { useEffect } from "react";
import { register } from "@builder.io/sdk-react";
import { builderComponents } from "../builder-registry";

let registered = false;

export default function BuilderRegistrar() {
  useEffect(() => {
    if (registered) return;
    registered = true;

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
