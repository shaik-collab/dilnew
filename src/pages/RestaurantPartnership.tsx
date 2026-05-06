import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsStrip from "../components/NewsStrip";
import LazyImage from "../components/LazyImage";
import HoneycombBrands from "../components/HoneycombBrands";
import SEO from "../components/SEO";
import { toast } from "sonner";
import {
  Clock,
  Percent,
  BarChart2,
  Award,
  ShoppingBag,
  Calculator,
  Send,
  Sparkles,
  ArrowRight,
  Quote,
  ShieldCheck,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

import axios from "axios";

const RestaurantPartnership = () => {
  // Form for kitchen utilization calculator
  const [kitchenData, setKitchenData] = useState({
    kitchenSize: 0,
    totalStaff: 0,
    operatingHours: 0,
    currentOrders: 0,
    prepTime: 0,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [calculationResult, setCalculationResult] = useState<{
    totalManHours: number;
    totalPotentialOrders: number;
    underutilizedPercent: number;
    additionalOrders: number;
    recommendation: string;
  } | null>(null);

  // Form for restaurant signup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      restaurantName: "",
      area: "",
      city: "",
      contactNumber: "",
      email: "",
      pincode: "",
      kitchenArea: "",
      kitchenWorkingHours: "",
      totalOrdersPerDay: "",
      freezerCapacity: "",
    },
  });

  const handleCalculatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setKitchenData({
      ...kitchenData,
      [name]: parseFloat(value) || 0,
    });
  };

  const [isSaving, setIsSaving] = useState<boolean>(false);

  const calculateUtilization = () => {
    const { kitchenSize, totalStaff, operatingHours, currentOrders, prepTime } =
      kitchenData;

    if (totalStaff <= 0 || operatingHours <= 0 || prepTime <= 0) {
      toast.error("Please enter valid values for all fields");
      return;
    }

    const totalManHours = totalStaff * operatingHours;
    const totalPotentialOrders =
      prepTime > 0 ? Math.floor((60 / prepTime) * totalManHours) : 0;
    const additionalOrders = totalPotentialOrders - currentOrders;
    const underutilizedPercent =
      totalPotentialOrders > 0
        ? Math.round(
            ((totalPotentialOrders - currentOrders) / totalPotentialOrders) *
              100
          )
        : 0;

    // Determine recommendation based on additional orders and kitchen size
    let recommendation = "";
    if (additionalOrders >= 20 && additionalOrders < 50 && kitchenSize < 150) {
      recommendation = "You should sign up with TWO Dil Brands";
    } else if (
      additionalOrders >= 50 &&
      additionalOrders < 100 &&
      kitchenSize >= 150 &&
      kitchenSize < 500
    ) {
      recommendation = "You should sign up with FOUR Dil Brands";
    } else if (additionalOrders >= 100 && kitchenSize >= 400) {
      recommendation = "You should sign up with SIX Dil Brands";
    }

    setCalculationResult({
      totalManHours,
      totalPotentialOrders,
      underutilizedPercent,
      additionalOrders,
      recommendation,
    });

    toast.success("Calculation complete!");
  };

  const onSignUpSubmit = async (data: any) => {
    setIsSaving(true);
    try {
      let res = await axios.post(`${apiUrl}/main_website/enquiry`, {
        type: "partner_form",
        data: data,
      });

      console.log(res);
      // toast.success("Thanks for signing up! We will contact you soon.");
      console.log("Form submitted:", data);
      if (res.data.message == "Data saved successfully") {
        setIsDialogOpen(true);
        reset();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsSaving(false);
    }
  };

  const advantageCards = [
    {
      title: "30-40% profit on food cost",
      description:
        "Fulfill Dil's delivery-only brand orders and earn 30-40% profit.",
      icon: <Percent size={24} className="text-dil-purple" />,
    },
    {
      title: "Reduced Product Cost",
      description: "Enjoy large-chain pricing benefits.",
      icon: <ShoppingBag size={24} className="text-dil-purple" />,
    },
    {
      title: "Free Training",
      description: "Skilled L&D team trains your staff at no charge.",
      icon: <Award size={24} className="text-dil-purple" />,
    },
    {
      title: "Free Dil POS System",
      description: "Manage incoming orders & inventory from one dashboard.",
      icon: <BarChart2 size={24} className="text-dil-purple" />,
    },
    {
      title: "Minimal Start Time",
      description: "Launch within just 2 weeks.",
      icon: <Clock size={24} className="text-dil-purple" />,
    },
    {
      title: "Free Marketing & Transparent PnL",
      description:
        "Dil covers commissions, discounts, and marketing with clear PnL.",
      icon: <Calculator size={24} className="text-dil-purple" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "We've been with Dil Foods for 3 years. We earn additional profits and have now opened another outlet.",
      author: "Prabhat Kumar",
    },
    {
      quote:
        "We see Dil as business partners rather than just a revenue source. We learn from them every day.",
      author: "Monika",
    },
    {
      quote:
        "We run Dil Punjabi Daily, Bihari Bowl, and Bhole Ke Chole. Our orders have doubled!",
      author: "Vivek",
    },
    {
      quote:
        "I run 4 Dil brands from my home kitchen; I've gained good income and knowledge through this association.",
      author: "Chaitanya",
    },
  ];

  const brands = [
    {
      name: "Khichdi Bar",
      logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
    },
    {
      name: "Dil Punjabi Daily",
      logo: "/lovable-uploads/DIL_daily_new.png",
    },
    {
      name: "Bihari Bowl",
      logo: "/lovable-uploads/bb_logo.png",
    },
    {
      name: "Bhole ke Chole",
      logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
    },
    {
      name: "House Of Andhra",
      logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
    },
    {
      name: "The Chaat Cult",
      logo: "/lovable-uploads/tcc.png",
    },
    {
      name: "Junglee Kitchen",
      logo: "/lovable-uploads/junglee logo.png",
    },
    {
      name: "VEGERAMA",
      logo: "/lovable-uploads/vegerama_new-Photoroom.png",
    },
    {
      name: "Aahar",
      logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
    },
    {
      name: "Nagada",
      logo: "/lovable-uploads/Nagadalogo.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Restaurant Partnership — Grow Your Kitchen with Dil Foods"
        description="Turn your existing kitchen into a profit hub. Same kitchen, same staff, more orders. Partner with Dil Foods to launch on Swiggy & Zomato with our 10 virtual brands — zero infrastructure investment, ready-to-cook supply, full operational support."
        path="/restaurant-partnership"
      />
      <Navbar />

      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-2xl z-50 ring-1 ring-dil-purple/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-dil-purple/10 flex items-center justify-center">
                <Sparkles size={20} className="text-dil-purple" />
              </div>
              <Dialog.Title className="text-2xl font-bold text-dil-purple">
                Thank you!
              </Dialog.Title>
            </div>
            <Dialog.Description className="mt-3 text-sm text-gray-600 leading-relaxed">
              Your enquiry has been submitted. Our partnerships team will reach
              out within 24 hours.
            </Dialog.Description>
            <div className="mt-6 text-right">
              <button
                className="rounded-full bg-dil-purple px-6 py-2.5 text-white font-semibold hover:bg-dil-purple/90 transition-colors"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Hero Section — Cream parchment palette, partner-specific content */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FDF9F2]">
        {/* Warm decorative blobs */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-[#E91E63]/[0.08] blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-[#c9a227]/[0.14] blur-3xl"></div>
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[320px] h-[320px] rounded-full bg-[#4B0076]/[0.05] blur-3xl"></div>
        <div className="pointer-events-none absolute top-1/4 left-[8%] w-[260px] h-[260px] rounded-full bg-[#c9a227]/[0.08] blur-3xl"></div>

        {/* Dotted grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c9a227 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        ></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-7 animate-fadeInUp">
            Join India's truly largest
            <br />
            <span className="text-[#E91E63]">virtual brands network</span>
          </h1>

          <p
            className="font-body text-base md:text-lg lg:text-xl text-[#1a1a1a] max-w-2xl mx-auto mb-10 leading-relaxed font-medium animate-fadeInUp"
            style={{
              textShadow: "0 1px 2px rgba(255, 248, 230, 0.7)",
              animationDelay: "0.1s",
            }}
          >
            Unlock the full potential of your kitchen and increase your revenue
            without additional infrastructure costs.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#signup"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#E91E63] text-white rounded-full font-semibold shadow-xl shadow-[#E91E63]/30 ring-2 ring-[#c9a227]/60 hover:bg-[#C2185B] hover:ring-[#c9a227] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles size={16} className="mr-2 text-[#FFD700]" />
              Apply Now
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a1a1a] rounded-full font-semibold border border-[#1a1a1a] shadow-md hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              <Calculator size={16} className="mr-2" />
              Calculate Your Potential
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="flex justify-center animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-3 rounded-full bg-white/85 backdrop-blur-md border border-[#c9a227]/40 shadow-md text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase text-[#1a1a1a]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#c9a227]" />
                300+ Outlets
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#c9a227]"></span>
              <span>30-40% Profit</span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#c9a227]"></span>
              <span>2-Week Launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <NewsStrip
        text="SAME KITCHEN! SAME STAFF! MORE ORDERS!!"
        bgColor="bg-gradient-to-r from-[#FFF8E1] via-[#FFEFC2] to-[#FFF8E1]"
        textColor="text-[#8a6d10]"
        speed="extremely-slow"
      />

      {/* 3-Step Onboarding */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-dil-purple uppercase mb-3">
              The Process
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              Easy 3-Step Onboarding
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              From pick-up to pay-out — three simple steps to start earning more from your kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-dil-purple/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="h-1.5 bg-[#E91E63]"></div>
              <div className="p-7 flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="rounded-full bg-[#E91E63] w-16 h-16 flex items-center justify-center shadow-lg shadow-[#E91E63]/30">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pick the Brand Concept
                </h3>
                <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed">
                  Choose from our portfolio of virtual brands that best suit your kitchen.
                </p>
                <div className="mt-auto w-full pt-2 border-t border-gray-100">
                  <HoneycombBrands brands={brands} size="medium" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-dil-purple/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="h-1.5 bg-[#E91E63]"></div>
              <div className="p-7 flex flex-col items-center text-center">
                <div className="rounded-full bg-[#E91E63] w-16 h-16 flex items-center justify-center mb-5 shadow-lg shadow-[#E91E63]/30">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Get Your Staff Trained
                </h3>
                <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed">
                  Our experts train your kitchen staff at no additional cost — on-site.
                </p>
                <div className="mt-auto h-44 w-full flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                  <LazyImage
                    src="/lovable-uploads/47be681e-832e-444c-884a-0fdf808a7a8e.png"
                    alt="Staff training"
                    className="object-contain max-h-full"
                    width={200}
                    height={176}
                    quality={80}
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-dil-purple/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="h-1.5 bg-[#E91E63]"></div>
              <div className="p-7 flex flex-col items-center text-center">
                <div className="rounded-full bg-[#E91E63] w-16 h-16 flex items-center justify-center mb-5 shadow-lg shadow-[#E91E63]/30">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Get More Orders
                </h3>
                <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed">
                  {/* Simply reheat and assemble delivered food from us — same kitchen, more revenue. */}
                  Simple steps to help kitchens prepare and pack food easily, so every order goes out quickly and consistently.
                </p>
                <div className="mt-auto h-44 w-full flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                  <LazyImage
                    src="/lovable-uploads/1167e12a-5b3b-4f3b-9653-7cb0ed27b4f6.png"
                    alt="Food delivery"
                    className="object-contain max-h-full"
                    width={200}
                    height={176}
                    quality={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-dil-purple uppercase mb-3">
              Why Partner
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              Partnership Advantages
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to start earning more from your existing kitchen — at zero upfront cost.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantageCards.map((card, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-dil-purple/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E91E63] flex items-center justify-center shadow-md shadow-[#E91E63]/20 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {/* Icon — recolor to white inside the tile */}
                  <span className="text-white [&_svg]:text-white [&_svg]:w-6 [&_svg]:h-6">
                    {card.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Utilization Calculator */}
      <section id="calculator" className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-dil-purple uppercase mb-3">
              Free Tool
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              Is your restaurant{" "}
              <span className="bg-clip-text text-transparent bg-[#E91E63]">
                underutilized?
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Fill in the details below to see how much more your kitchen could produce.
            </p>
          </div>

          <div className="bg-gray-50 shadow-lg rounded-2xl p-6 md:p-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Kitchen size <span className="text-gray-400 font-normal">(sq ft)</span>
                  </label>
                  <input
                    type="number"
                    name="kitchenSize"
                    value={kitchenData.kitchenSize || ""}
                    onChange={handleCalculatorChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Total staff
                  </label>
                  <input
                    type="number"
                    name="totalStaff"
                    value={kitchenData.totalStaff || ""}
                    onChange={handleCalculatorChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Operating hours <span className="text-gray-400 font-normal">(per day)</span>
                  </label>
                  <input
                    type="number"
                    name="operatingHours"
                    value={kitchenData.operatingHours || ""}
                    onChange={handleCalculatorChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Current orders <span className="text-gray-400 font-normal">(per day)</span>
                  </label>
                  <input
                    type="number"
                    name="currentOrders"
                    value={kitchenData.currentOrders || ""}
                    onChange={handleCalculatorChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Kitchen prep time <span className="text-gray-400 font-normal">(minutes / order)</span>
                  </label>
                  <input
                    type="number"
                    name="prepTime"
                    value={kitchenData.prepTime || ""}
                    onChange={handleCalculatorChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                </div>
                <div className="pt-7">
                  <button
                    onClick={calculateUtilization}
                    className="group w-full inline-flex items-center justify-center px-6 py-3 bg-dil-purple text-white rounded-full font-semibold shadow-lg shadow-dil-purple/30 hover:bg-dil-purple/90 hover:shadow-xl transition-all duration-300"
                  >
                    <Calculator size={18} className="mr-2" />
                    Calculate Utilization
                  </button>
                </div>
              </div>
            </div>

            {calculationResult && (
              <div className="mt-8 p-6 md:p-8 bg-[#E91E63] rounded-2xl text-white shadow-xl shadow-[#E91E63]/20 relative overflow-hidden">
                {/* decorative shape */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/[0.06] blur-2xl"></div>

                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-dil-yellow" />
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-dil-yellow">
                      Your Result
                    </p>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Calculation Results</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-wider opacity-80">Total Man-hours</p>
                      <p className="text-3xl font-bold mt-1">{calculationResult.totalManHours}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-wider opacity-80">Potential Orders</p>
                      <p className="text-3xl font-bold mt-1">{calculationResult.totalPotentialOrders}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-wider opacity-80">Additional Orders</p>
                      <p className="text-3xl font-bold mt-1">+{calculationResult.additionalOrders}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center border-t border-white/20 pt-6">
                    <p className="text-base opacity-90">You are underutilized by</p>
                    <p className="text-5xl md:text-6xl font-bold text-dil-yellow my-2">
                      {calculationResult.underutilizedPercent}%
                    </p>

                    {calculationResult.recommendation && (
                      <div className="mt-4 px-6 py-4 bg-white/15 rounded-xl text-center backdrop-blur-sm ring-1 ring-dil-yellow/40">
                        <p className="font-bold text-lg md:text-xl">
                          {calculationResult.recommendation}
                        </p>
                        <a
                          href="#signup"
                          className="mt-3 inline-flex items-center text-sm font-semibold text-dil-yellow hover:text-white transition-colors"
                        >
                          Apply now
                          <ArrowRight size={14} className="ml-1.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-dil-purple uppercase mb-3">
              Partner Stories
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              What our partners say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-7 md:p-8 border border-gray-100 hover:border-dil-purple/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <Quote size={32} className="text-dil-purple/70 mb-4" strokeWidth={1.5} />
                  <p className="text-gray-800 text-base md:text-lg mb-6 flex-grow font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#E91E63] flex items-center justify-center text-white font-bold shadow-md">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">Dil Foods Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section id="signup" className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-dil-purple uppercase mb-3">
              Apply Today
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              Sign Up Today
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              Join India's largest virtual brands network and start earning more from your kitchen.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSignUpSubmit)}
            className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100 shadow-lg space-y-8"
          >
            {/* Group 1: About You */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-dil-purple uppercase mb-4">
                01 · About You
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-dil-red font-medium">Name is required</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Contact Number*
                  </label>
                  <input
                    type="tel"
                    {...register("contactNumber", {
                      required: true,
                      pattern: /^[0-9]{10}$/,
                    })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                  {errors.contactNumber && (
                    <p className="mt-1 text-xs text-dil-red font-medium">
                      Please enter a valid 10-digit number
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email*
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-dil-red font-medium">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* Group 2: Restaurant */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-dil-purple uppercase mb-4">
                02 · Your Restaurant
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Restaurant Name*
                  </label>
                  <input
                    type="text"
                    {...register("restaurantName", { required: true })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                  {errors.restaurantName && (
                    <p className="mt-1 text-xs text-dil-red font-medium">
                      Restaurant name is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Area*
                  </label>
                  <input
                    type="text"
                    {...register("area", { required: true })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                  {errors.area && (
                    <p className="mt-1 text-xs text-dil-red font-medium">Area is required</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    City*
                  </label>
                  <input
                    type="text"
                    {...register("city", { required: true })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                  {errors.city && (
                    <p className="mt-1 text-xs text-dil-red font-medium">City is required</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Pincode*
                  </label>
                  <input
                    type="text"
                    {...register("pincode", {
                      required: true,
                      pattern: /^[0-9]{6}$/,
                    })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                    placeholder="6-digit pincode"
                  />
                  {errors.pincode && (
                    <p className="mt-1 text-xs text-dil-red font-medium">
                      Please enter a valid 6-digit pincode
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* Group 3: Kitchen Details */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-dil-purple uppercase mb-4">
                03 · Kitchen Details
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Kitchen Area <span className="text-gray-400 font-normal">(sq ft)*</span>
                  </label>
                  <input
                    type="number"
                    {...register("kitchenArea", {
                      required: true,
                      min: 1,
                    })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                  {errors.kitchenArea && (
                    <p className="mt-1 text-xs text-dil-red font-medium">
                      Kitchen area is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Working Hours <span className="text-gray-400 font-normal">(per day)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="24"
                    step="1"
                    {...register("kitchenWorkingHours", {
                      min: { value: 1, message: "Working hours must be at least 1 hour" },
                      max: { value: 24, message: "Working hours cannot exceed 24" },
                      valueAsNumber: true,
                    })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                    placeholder="1–24"
                  />
                  {errors.kitchenWorkingHours && (
                    <p className="mt-1 text-xs text-dil-red font-medium">
                      {errors.kitchenWorkingHours.message || "Please enter valid working hours"}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Orders / Day
                  </label>
                  <input
                    type="number"
                    {...register("totalOrdersPerDay", { min: 0 })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                    placeholder="Average orders per day"
                  />
                  {errors.totalOrdersPerDay && (
                    <p className="mt-1 text-xs text-dil-red font-medium">
                      Please enter a valid number
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Freezer Capacity <span className="text-gray-400 font-normal">(litres)*</span>
                  </label>
                  <input
                    type="number"
                    {...register("freezerCapacity", {
                      required: true,
                      min: 1,
                    })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dil-purple/40 focus:border-dil-purple transition-all"
                  />
                  {errors.freezerCapacity && (
                    <p className="mt-1 text-xs text-dil-red font-medium">
                      Freezer capacity is required
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-dil-purple text-white rounded-full font-semibold shadow-xl shadow-dil-purple/30 hover:bg-dil-purple/90 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSaving ? (
                "Submitting..."
              ) : (
                <>
                  <Send size={18} />
                  Submit Application
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RestaurantPartnership;
