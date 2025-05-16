import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RestaurantPartnership from "./pages/RestaurantPartnership";
import HorecaSupply from "./pages/HorecaSupply";
import NotFound from "./pages/NotFound";
import Media from "./pages/Media";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DeleteData from "./pages/DeleteData";

const queryClient = new QueryClient();

const App = () => {
  const hostname = window.location.hostname;

  const isTovaDomain = hostname.includes("tovafoods.in");

  // Set metadata for Tova domain
  if (isTovaDomain) {
    document.title = "Tova Foods - India's Trusted Brand";

    const descriptionTag = document.querySelector("meta[name='description']");
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Tova Foods - Premium food solutions tailored for your needs."
      );
    }

    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute("content", "/tova_logo.png");
    }

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", "/tova_favicon.png");
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Conditionally set the homepage */}
            <Route
              path="/"
              element={isTovaDomain ? <HorecaSupply /> : <Index />}
            />

            {/* Keep the other routes as they are */}
            <Route
              path="/restaurant-partnership"
              element={<RestaurantPartnership />}
            />
            <Route path="/horeca-supply" element={<HorecaSupply />} />
            <Route path="/media" element={<Media />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/delete-data" element={<DeleteData />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
