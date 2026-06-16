import "./global.css";
import "./builder-registry";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isPreviewing } from "@builder.io/sdk-react";
import Header from "@/components/Header";
import Index from "./pages/Index";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import BuilderPage from "./pages/BuilderPage";

const queryClient = new QueryClient();

const isBuilderPreview = isPreviewing();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        {isBuilderPreview ? (
          <BuilderPage />
        ) : (
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Placeholder />} />
            <Route path="/what-is-an-esim" element={<Placeholder />} />
            <Route path="/faqs" element={<Placeholder />} />
            <Route path="/plans" element={<Placeholder />} />
            <Route path="/holacoins" element={<Placeholder />} />
            <Route path="/affiliates" element={<Placeholder />} />
            <Route path="/for-business" element={<Placeholder />} />
            {/* Builder.io catch-all — resolves pages from the visual CMS */}
            <Route path="*" element={<BuilderPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
