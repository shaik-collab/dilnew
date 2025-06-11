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
import axios from "axios";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

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
    city: "",
    more: "",
  });
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const isTovafoodsDomain = window.location.hostname.includes("tovafoods.in");

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

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSaving(true);
    // Form submission logic would go here
    try {
      let res = await axios.post(`${apiUrl}/main_website/enquiry`, {
        type: "enquire",
        data: { ...formData, selectedCategories },
      });

      console.log;

      toast({
        title: "Enquiry Submitted",
        description:
          "Thank you for your interest. Our team will contact you shortly!",
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsSaving(false);
    }

    // Reset form
    setFormData({
      brandName: "",
      quantities: "",
      contactNumber: "",
      email: "",
      city: "",
      more: "",
    });
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pb-12 md:pb-16 bg-gradient-purple-red ">
        {isTovafoodsDomain && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              className="pt-12 text-white font-light w-24 mt-2 "
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              A company of{" "}
              <Link
                to="https://dilfoods.in"
                className="inline-block text-[#E81E3F]"
              >
                Dil Foods
              </Link>
            </p>
          </div>
        )}
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${
            isTovafoodsDomain ? "pt-12 md:pt-24" : "pt-32"
          } `}
        >
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

      {/* Why Food Businesses Choose Tova Foods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-purple-red text-transparent bg-clip-text">
            Why Food Businesses Choose Tova Foods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-soft-yellow-orange">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-dil-purple mb-2">
                  Reduced Manpower & Cost
                </h3>
                <div className="flex items-center mb-4">
                  <div className="flex flex-col items-center mr-4 flex-shrink-0">
                    <div className="w-24 h-24 overflow-hidden shadow-md">
                      <LazyImage
                        src="/horeca/1.png"
                        alt="Reduced Manpower & Cost"
                        className="w-full h-full"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Cut prep time and reduce skilled staff needs with our
                      pre-made gravies & sauces.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-soft-yellow-orange">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-dil-purple mb-2">
                  Consistency, Every Time
                </h3>
                <div className="flex items-center mb-4">
                  <div className="flex flex-col items-center mr-4 flex-shrink-0">
                    <div className="w-24 h-24 overflow-hidden shadow-md">
                      <LazyImage
                        src="/horeca/2.png"
                        alt="Consistency, Every Time"
                        className="w-full h-full"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Get the same taste,texture and quality in every batch,with
                      our standardized manufacturing process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-soft-yellow-orange">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-dil-purple mb-2">
                  Be a part of Quick Commerce wave with Tova
                </h3>
                <div className="flex items-center mb-4">
                  <div className="flex flex-col items-center mr-4 flex-shrink-0">
                    <div className="w-24 h-24 overflow-hidden shadow-md">
                      <LazyImage
                        src="/horeca/3.png"
                        alt="Be a part of Quick Commerce wave with Tova"
                        className="w-full h-full"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Serve great food in minutes with Tova Foods' pre-cooked,
                      blast-frozen meals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-soft-yellow-orange">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-dil-purple mb-2">
                  Drive business through processes and not skills
                </h3>
                <div className="flex items-center mb-4">
                  <div className="flex flex-col items-center mr-4 flex-shrink-0">
                    <div className="w-24 h-24 overflow-hidden shadow-md">
                      <LazyImage
                        src="/horeca/4.png"
                        alt="Drive business through processes and not skills"
                        className="w-full h-full"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Our ready-to-eat and ready-to-cook products simplify
                      operations,no skilled chef needed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 5 */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-soft-yellow-orange">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-dil-purple mb-2">
                  Multi Cuisine offering at same operational cost
                </h3>
                <div className="flex items-center mb-4">
                  <div className="flex flex-col items-center mr-4 flex-shrink-0">
                    <div className="w-24 h-24 overflow-hidden shadow-md">
                      <LazyImage
                        src="/horeca/5.png"
                        alt="Multi Cuisine offering at same operational cost"
                        className="w-full h-full"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Expand your menu without expanding your team.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action Card */}
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-purple-red flex items-center justify-center">
              <CardContent className="p-0 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <Button
                  className="bg-white text-dil-purple hover:bg-gray-100 font-semibold px-6 py-2"
                  onClick={scrollToEnquiry}
                >
                  Enquire Now <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-purple-red text-transparent bg-clip-text">
            Our Process
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            At Tova Foods, we combine automated cooking technology, robust
            quality control systems, and cold chain logistics to deliver a
            product that's as fresh and flavorful as it is reliable.
          </p>

          {/* Manufacturing Process */}
          <div className="mb-16">
            <Card className="p-8 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-gradient-purple-red rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-dil-purple mb-4">
                      Manufacturing Process
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We use state-of-the-art semi-automated industrial
                      production lines that replicate the manual cooking process
                      with far greater precision and hygiene. Ensuring that
                      every batch is cooked uniformly, with the same timing,
                      temperature, and technique every single time.
                    </p>

                    {/* Process Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-full h-64 rounded-lg mb-3 flex items-center justify-center">
                          <LazyImage
                            src="/horeca/mp1.png"
                            alt="Semi-Automated Systems"
                            className="w-full h-full rounded-lg"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-full  h-64 rounded-lg mb-3 flex items-center justify-center">
                          <LazyImage
                            src="/horeca/mp2.png"
                            alt="Temperature Control"
                            className="w-full h-full rounded-lg"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-64  rounded-lg mb-3 flex items-center justify-center">
                          <LazyImage
                            src="/horeca/mp3.png"
                            alt="Minimal Human Intervention"
                            className="w-full h-full rounded-lg"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-full h-64 rounded-lg mb-3 flex items-center justify-center">
                          <LazyImage
                            src="/horeca/mp4.png"
                            alt="Standardized Recipes"
                            className="w-full h-full rounded-lg"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quality Control */}
          <div className="mb-16">
            <Card className="p-8 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-gradient-purple-red rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-dil-purple mb-4">
                      Quality Control
                    </h3>
                    <p className="text-gray-700">
                      Our facility follows strict FSSAI and HACCP Compliant food
                      safety norms, with multiple quality checks built into each
                      stage of production.
                    </p>
                    <div className="flex justify-center">
                      <div className="w-full max-w-md">
                        <LazyImage
                          src="/horeca/qualitycontrol.png"
                          alt="Production Capacity"
                          className="w-full h-48 rounded-lg "
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Capacity */}
          <div className="mb-16">
            <Card className="p-8 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-gradient-purple-red rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 flex-shrink-0">
                    3
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-dil-purple mb-4">
                      Capacity
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Our current production infrastructure allows us to
                      manufacture up to 20 tonnes of gravies, curries, and bases
                      per day. Whether you're a multi-city cloud kitchen or
                      restaurant, or a QSR brand scaling fast, our systems are
                      built to grow with you.
                    </p>
                    <div className="flex justify-center">
                      <div className="w-full max-w-md">
                        <LazyImage
                          src="/horeca/capacity.png"
                          alt="Production Capacity"
                          className="w-full h-48 rounded-lg"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cold Chain Storage & Delivery */}
          <div className="mb-12">
            <Card className="p-8 shadow-lg bg-white">
              <CardContent className="p-0">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 bg-gradient-purple-red rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 flex-shrink-0">
                    4
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-dil-purple mb-4">
                      Cold Chain Storage & Delivery
                    </h3>
                    <p className="text-gray-700 mb-6">
                      From the moment the product leaves our blast freezer to
                      the point it reaches your kitchen, it remains in a fully
                      controlled cold chain ensuring no compromise on safety or
                      quality.
                    </p>
                    <div className="flex justify-center">
                      <div className="w-full max-w-md">
                        <LazyImage
                          src="/horeca/s1.png"
                          alt="Cold Chain Storage"
                          className="w-full h-48 rounded-lg"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button
              className="bg-gradient-purple-red hover:opacity-90 text-white px-8 py-3 text-lg font-semibold"
              onClick={scrollToEnquiry}
            >
              Enquire Now <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Delivery Section */}
      {/* <section className="py-16 bg-dil-yellow">
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
                src="/lovable-uploads/packedfood.jpg"
                alt="Food Production with Dil Foods"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section> */}

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="quantities">
                    Approx. Monthly Quantities (kg) *
                  </Label>
                  <Input
                    id="quantities"
                    name="quantities"
                    type="number"
                    placeholder="Quantities required per month in kg"
                    value={formData.quantities}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    type="number"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city name"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="quantities">Tell us More</Label>
                <Textarea
                  id="more"
                  name="more"
                  placeholder="Tell us more..."
                  value={formData.more}
                  onChange={handleInputChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-purple-red hover:bg-dil-red/90 text-white flex items-center justify-center"
                disabled={isSaving}
              >
                {isSaving ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Enquiry <Send size={16} className="ml-2" />
                  </>
                )}
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
