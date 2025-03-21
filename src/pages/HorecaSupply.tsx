import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsStrip from "../components/NewsStrip";
import LazyImage from "../components/LazyImage";
import { ArrowRight, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Updated with new food categories and images
const foodCategories = [
  {
    id: "snacks",
    name: "Snacks",
    image: "/lovable-uploads/food-categories/samosa2.jpeg",
    description:
      "Delicious ready-to-cook snacks that can be prepared within minutes.",
  },
  {
    id: "base-gravies",
    name: "Base Gravies",
    image: "/lovable-uploads/food-categories/basegravy1.jpeg",
    description:
      "Perfectly balanced base gravies to create authentic Indian curries instantly.",
  },
  {
    id: "indian-desserts",
    name: "Indian Desserts",
    image: "/lovable-uploads/food-categories/GulabJamum.jpeg",
    description:
      "Traditional Indian sweets and desserts with authentic taste and quick preparation.",
  },
  {
    id: "ready-to-eat-curries",
    name: "Ready to Eat Curries",
    image: "/lovable-uploads/food-categories/RTECurry2.jpeg",
    description:
      "Authentic Indian curries ready to serve in minutes with homemade taste.",
  },
  {
    id: "rice-products",
    name: "Rice Products",
    image: "/lovable-uploads/food-categories/riceproduct.jpeg",
    description:
      "Aromatic rice dishes including biryani and pulao that regenerate perfectly.",
  },
  {
    id: "beverages-premix",
    name: "Beverages Premix",
    image: "/lovable-uploads/food-categories/premixchai.jpeg",
    description:
      "Instant beverage premixes for tea, coffee and other popular Indian drinks.",
  },
  {
    id: "pan-asian-food",
    name: "Pan Asian Food",
    image: "/lovable-uploads/food-categories/panasian.jpeg",
    description:
      "Quick-prep authentic Asian favorites including manchurian, noodles and more.",
  },
  {
    id: "continental-food",
    name: "Continental Food",
    image: "/lovable-uploads/food-categories/continental.jpeg",
    description:
      "Ready-to-cook continental classics that bring global flavors to your menu.",
  },
  {
    id: "indian-breads",
    name: "Indian Breads",
    image: "/lovable-uploads/food-categories/indianbread1.jpeg",
    description:
      "Fresh Indian breads including naan, paratha, and roti ready in minutes.",
  },
];

const HorecaSupply = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    brandName: "",
    quantities: "",
    contactNumber: "",
    email: "",
  });

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById("enquire");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.brandName ||
      !formData.contactNumber ||
      selectedCategories.length === 0
    ) {
      toast({
        title: "Missing information",
        description:
          "Please fill in all required fields and select at least one category.",
        variant: "destructive",
      });
      return;
    }

    // Form submission logic would go here
    toast({
      title: "Enquiry Submitted",
      description:
        "Thank you for your interest. Our team will contact you shortly!",
    });

    // Reset form
    setFormData({
      brandName: "",
      quantities: "",
      contactNumber: "",
      email: "",
    });
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-purple-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Enabling restaurants and quick commerce players to cook fast, so
            that they can deliver fast!
          </h1>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 text-white">
              <div className="flex items-baseline">
                <div className="w-3 h-3 bg-dil-yellow rounded-full mr-2 "></div>
                <span className="text-start">
                  In-house automated manufacturing facility
                </span>
              </div>
              <div className="flex items-baseline">
                <div className="w-3 h-3 bg-dil-yellow rounded-full mr-2"></div>
                <span>AM to PM food solutions</span>
              </div>
              <div className="flex items-baseline">
                <div className="w-3 h-3 bg-dil-yellow rounded-full mr-2"></div>
                <span>All cuisines covered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Strip */}
      <NewsStrip
        text="READY TO COOK! READY TO EAT! READY TO REGENERATE IN 2 MINUTES!"
        speed="extremely-slow"
      />

      {/* Categories Section - Updated with all 9 categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-purple-red text-transparent bg-clip-text">
            Our Food Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foodCategories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-gradient-soft-yellow-orange"
              >
                <div className="w-full h-64 relative">
                  <LazyImage
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-dil-purple">
                    {category.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                </CardContent>
                <CardFooter className="p-4 border-t bg-gradient-yellow-orange bg-opacity-30">
                  <Button
                    className="w-full bg-gradient-purple-red hover:opacity-90 text-white gap-2"
                    onClick={scrollToEnquiry}
                  >
                    Enquire Now <ArrowRight size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Delivery Section */}
      <section className="py-16 bg-dil-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-around">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-dil-purple mb-4">
                Perfect for 10-Minute Deliveries!
              </h2>
              <p className="text-dil-purple text-lg mb-6">
                Our products regenerate in just 2 minutes, making them ideal for
                quick commerce platforms and fast-food operations.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-dil-purple rounded-full mr-2"></div>
                  <span className="text-dil-purple">High Quality</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-dil-purple rounded-full mr-2"></div>
                  <span className="text-dil-purple">Fast Preparation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-dil-purple rounded-full mr-2"></div>
                  <span className="text-dil-purple">Great Taste</span>
                </div>
              </div>
            </div>

            <div className="">
              <LazyImage
                src="/lovable-uploads/8c184d03-531e-4220-a71c-e1dd8d9706ab.png"
                alt="Food Production with Dil Foods"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquire" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-purple-red text-transparent bg-clip-text">
            Enquire Now
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="brandName">Brand Name *</Label>
                <Input
                  id="brandName"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  placeholder="Enter your brand name"
                  required
                />
              </div>

              <div>
                <Label>SKUs Interested In *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 mt-2">
                  {foodCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() =>
                          handleCategoryToggle(category.id)
                        }
                      />
                      <Label
                        htmlFor={category.id}
                        className="text-sm cursor-pointer"
                      >
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="quantities">
                  Approx. Monthly Quantities (kg)
                </Label>
                <Textarea
                  id="quantities"
                  name="quantities"
                  placeholder="Enter approximate quantities required per month"
                  value={formData.quantities}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-purple-red hover:bg-dil-red/90 text-white"
              >
                Submit Enquiry <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HorecaSupply;
