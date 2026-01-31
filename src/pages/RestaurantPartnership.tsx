import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsStrip from "../components/NewsStrip";
import LazyImage from "../components/LazyImage";
import HoneycombBrands from "../components/HoneycombBrands";
import { toast } from "sonner";
import {
  Users,
  Clock,
  PackageCheck,
  Percent,
  BarChart2,
  Award,
  ShoppingBag,
  Calculator,
  Send,
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
      name: "Aahar",
      logo: "/lovable-uploads/55d6ad50-361d-42cd-b556-c283b2ee23e4.png",
    },
    {
      name: "Bihari Bowl",
      logo: "/lovable-uploads/1310a9da-ccbe-4fa6-bc06-51441a0872ba.png",
    },
    {
      name: "Khichdi Bar",
      logo: "/lovable-uploads/e4e94576-7f4a-4f0c-ac31-cb388323568b.png",
    },
    {
      name: "Bhole ke Chole",
      logo: "/lovable-uploads/cdf67c56-7bd7-4023-af81-bf258fe60fe3.png",
    },
    {
      name: "The Chaat Cult",
      logo: "/lovable-uploads/235a933c-2973-43db-8419-1bc689100f0a.png",
    },
    {
      name: "House Of Andhra",
      logo: "/lovable-uploads/b7f77f5d-c32a-4b73-9673-c4572c649bf4.png",
    },
    {
      name: "Dil Foods",
      logo: "/lovable-uploads/981bf596-8923-43ae-950d-88e254903acf.png",
    },
    { name: "Dil Punjabi Daily", logo: "/lovable-uploads/vegerama_new-Photoroom.png" },
    {
      name: "Bowled Over",
      logo: "/lovable-uploads/fde1b960-d52b-4beb-bf58-bb7c457abca9.png",
    },
    {
      name: "Nagada",
      logo: "/lovable-uploads/1baa2440-41ee-47c5-8537-70989d99f512.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-bold">
              Thank you!
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-600">
              Your enquiry has been submitted. We will contact you soon.
            </Dialog.Description>
            <div className="mt-4 text-right">
              <button
                className="rounded bg-dil-red px-4 py-2 text-white"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Hero Section - Updated with purple gradient background */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-purple-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeInUp text-white">
            Join India's truly largest virtual brands network
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Unlock the full potential of your kitchen and increase your revenue
            without additional infrastructure costs
          </p>
          <a
            href="#signup"
            className="bg-white text-dil-purple px-4 py-2 rounded hover:bg-white/90 transition-colors font-semibold inline-flex items-center animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Partner with Dil Foods
          </a>
        </div>
      </section>

      {/* Ticker */}
      <NewsStrip text="SAME KITCHEN! SAME STAFF! MORE ORDERS!!" />

      {/* 3-Step Onboarding */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Easy 3-Step Onboarding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gradient-yellow-orange rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-dil-purple w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-dil-purple mb-3">
                  Pick the Brand Concept
                </h3>
                <p className="text-dil-purple mb-4">
                  Choose from our portfolio of virtual brands that best suit
                  your kitchen.
                </p>
                <div className="mt-auto">
                  <HoneycombBrands brands={brands} size="medium" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-yellow-orange rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-dil-purple w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-dil-purple mb-3">
                  Get Your Staff Trained
                </h3>
                <p className="text-dil-purple mb-4">
                  Our experts will train your kitchen staff at no additional
                  cost.
                </p>
                <div className="mt-auto h-48 w-full flex items-center justify-center">
                  <LazyImage
                    src="/lovable-uploads/47be681e-832e-444c-884a-0fdf808a7a8e.png"
                    alt="Staff training"
                    className="object-contain max-h-full rounded-lg shadow-md"
                    width={200}
                    height={192}
                    quality={80}
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-yellow-orange rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-dil-purple w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-dil-purple mb-3">
                  Get More Orders
                </h3>
                <p className="text-dil-purple mb-4">
                  Simply reheat and assemble delivered food from us.
                </p>
                <div className="mt-auto h-48 w-full flex items-center justify-center">
                  <LazyImage
                    src="/lovable-uploads/1167e12a-5b3b-4f3b-9653-7cb0ed27b4f6.png"
                    alt="Food delivery"
                    className="object-contain max-h-full rounded-lg shadow-md"
                    width={200}
                    height={192}
                    quality={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Partnership Advantages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantageCards.map((card, index) => (
              <div
                key={index}
                className="bg-gradient-yellow-orange rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="rounded-full bg-white p-3 mr-4">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dil-purple mb-2">
                      {card.title}
                    </h3>
                    <p className="text-dil-purple/90">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Utilization Calculator */}
      <section id="calculator" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-purple-red">
            Know If Your Restaurant Is Underutilized
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Fill in the details below to calculate how much potential your
            kitchen has to generate more orders and revenue.
          </p>

          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kitchen size (sq ft)
                    </label>
                    <input
                      type="number"
                      name="kitchenSize"
                      value={kitchenData.kitchenSize || ""}
                      onChange={handleCalculatorChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Total staff (number)
                    </label>
                    <input
                      type="number"
                      name="totalStaff"
                      value={kitchenData.totalStaff || ""}
                      onChange={handleCalculatorChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Operating hours (number)
                    </label>
                    <input
                      type="number"
                      name="operatingHours"
                      value={kitchenData.operatingHours || ""}
                      onChange={handleCalculatorChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current orders/day (number)
                    </label>
                    <input
                      type="number"
                      name="currentOrders"
                      value={kitchenData.currentOrders || ""}
                      onChange={handleCalculatorChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kitchen preparation time (minutes per order)
                    </label>
                    <input
                      type="number"
                      name="prepTime"
                      value={kitchenData.prepTime || ""}
                      onChange={handleCalculatorChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={calculateUtilization}
                      className="w-full btn-primary"
                    >
                      Calculate Utilization
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {calculationResult && (
              <div className="mt-8 p-6 bg-gradient-purple-red rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Calculation Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm opacity-80">Total Man-hours</p>
                    <p className="text-2xl font-bold">
                      {calculationResult.totalManHours}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Total Potential Orders</p>
                    <p className="text-2xl font-bold">
                      {calculationResult.totalPotentialOrders}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">
                      Additional Orders Possible
                    </p>
                    <p className="text-2xl font-bold">
                      {calculationResult.additionalOrders}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center border-t border-white/20 pt-4 mt-2">
                  <p className="text-lg opacity-90">You are underutilized by</p>
                  <p className="text-3xl font-bold">
                    {calculationResult.underutilizedPercent}%
                  </p>

                  {calculationResult.recommendation && (
                    <div className="mt-4 p-3 bg-white/20 rounded-lg text-center">
                      <p className="font-bold text-xl">
                        {calculationResult.recommendation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Partners Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-dil-purple rounded-xl p-6 shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      className="w-8 h-8 text-dil-yellow"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-dil-yellow text-lg mb-4 flex-grow font-medium">
                    {testimonial.quote}
                  </p>
                  <p className="text-white opacity-80">
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section id="signup" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sign Up Today
            </h2>
            <p className="text-gray-600">
              Join India's largest virtual brands network and start earning more
              from your kitchen
            </p>
          </div>

          <form onSubmit={handleSubmit(onSignUpSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name*
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">Name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant Name*
              </label>
              <input
                type="text"
                {...register("restaurantName", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
              />
              {errors.restaurantName && (
                <p className="mt-1 text-sm text-red-600">
                  Restaurant name is required
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Area*
              </label>
              <input
                type="text"
                {...register("area", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600">Area is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City*
              </label>
              <input
                type="text"
                {...register("city", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600">City is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number*
              </label>
              <input
                type="tel"
                {...register("contactNumber", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
              />
              {errors.contactNumber && (
                <p className="mt-1 text-sm text-red-600">
                  Please enter a valid 10-digit contact number
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-red"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="w-full btn-primary flex justify-center items-center gap-2 disabled:opacity-50"
            >
              {isSaving ? (
                "Submitting..."
              ) : (
                <>
                  <Send size={18} />
                  Submit Application
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
