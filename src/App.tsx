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
import SpecialOffer from "./pages/SpecialOffer";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => {
  const hostname = window.location.hostname;

  const isTovaDomain = hostname.includes("tovafoods.in");

  // Set metadata for Tova domain
  if (isTovaDomain) {
    // Dynamically set the title
    document.title = "Tova Foods - India's Trusted Brand";

    // Dynamically set meta tags
    let descriptionTag = document.querySelector("meta[name='description']");
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute(
      "content",
      "Tova Foods - Premium food solutions tailored for your needs."
    );

    let ogImage = document.querySelector("meta[property='og:image']");
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", "/tova_logo.png");

    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.setAttribute("rel", "icon");
      document.head.appendChild(favicon);
    }
    favicon.setAttribute("href", "/tova_foods1.png");
  } else {
    // Default metadata for other domains (like Dil Foods)
    document.title = "Dil Foods - India's Largest Virtual Brands Chain";

    let descriptionTag = document.querySelector("meta[name='description']");
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute(
      "content",
      "Dil Foods - India's largest truly virtual brands chain, helping restaurants increase revenue from existing kitchen infrastructure."
    );

    let ogImage = document.querySelector("meta[property='og:image']");
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute(
      "content",
      "/lovable-uploads/b743a878-95c1-4663-b49a-820eec6a6800.png"
    );

    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.setAttribute("rel", "icon");
      document.head.appendChild(favicon);
    }
    favicon.setAttribute(
      "href",
      "/lovable-uploads/b743a878-95c1-4663-b49a-820eec6a6800.png"
    );
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
            <Route path="/special-offer" element={<SpecialOffer />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
