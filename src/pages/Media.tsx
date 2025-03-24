import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type MediaItem = {
  title: string;
  source: string;
  date: string;
  description: string;
  url: string;
  imageUrl: string;
  category: "news" | "blogs" | "press";
};

const mediaItems: MediaItem[] = [
  {
    title:
      "Success Story: Dil Foods Founder Arpita Aditi Valued at Rs 75 Crore, Featured in Shark Tank India",
    source: "NavBharat Times",
    date: "February 20, 2024",
    description:
      "How Dil Foods founder Arpita Aditi impressed Shark Tank India judges and secured a Rs 2 crore deal at Rs 75 crore valuation.",
    url: "https://navbharattimes.indiatimes.com/business/business-news/success-story-of-arpita-aditi-founder-of-dil-foods-valued-rs-75-crore-featured-in-shark-tank-india/articleshow/109322999.cms",
    imageUrl: "/media/navbarath.png",
    category: "news",
  },
  {
    title:
      "Dil Foods Founder Arpita Aditi Strikes Rs 2 Crore Deal with Four Sharks on Shark Tank India Season 3",
    source: "The Weekend Leader",
    date: "February 17, 2024",
    description:
      "Dil Foods' success story on Shark Tank India Season 3, where founder Arpita Aditi secured investment from four Sharks.",
    url: "https://www.theweekendleader.com/Headlines/79278/dil-foods-founder-arpita-aditi-strikes-rs-2-crore-deal-with-four-sharks-on-shark-tank-india-season-3.html",
    imageUrl: "/media/theweekend.png",
    category: "news",
  },
  {
    title:
      "Shark Tank India Judges to Invest Rs 2 Crore in Dil Foods at Rs 75 Crore Valuation",
    source: "Indian Startup News",
    date: "February 15, 2024",
    description:
      "Details of the investment deal between Shark Tank India judges and Dil Foods, highlighting the company's impressive growth.",
    url: "https://indianstartupnews.com/news/shark-tank-india-judges-to-invest-rs-2-crore-in-dil-foods-at-rs-75-crore-valuation-2403481",
    imageUrl: "/media/asn.png",
    category: "news",
  },
  {
    title: "Virtual Restaurant Operator Dil Foods Raises $2 Million",
    source: "Economic Times Retail",
    date: "July 25, 2023",
    description:
      "Dil Foods has secured $2 million in funding to expand its virtual restaurant operations across India.",
    url: "https://retail.economictimes.indiatimes.com/news/food-entertainment/food-services/virtual-restaurant-operator-dil-foods-raises-2-mn/102166832",
    imageUrl: "/media/etr.png",
    category: "press",
  },
  {
    title:
      "Exclusive Interview: How One Can Get More Benefit From Dil Foods Startup",
    source: "Jansatta",
    date: "February 23, 2024",
    description:
      "Shark Tank Season 3 participant Arpita Aditi shares insights on how customers and partners can benefit from the Dil Foods platform.",
    url: "https://www.jansatta.com/entertainment/exclusive-interview-shark-tank-season-3-dil-foods-arpita-aditi-tells-how-one-can-get-more-benefit-from-her-startup-dil-foods/3189760/",
    imageUrl: "/media/jansatta.png",
    category: "blogs",
  },
  {
    title: "Virtual Restaurant Operator Dil Foods Closes Pre-Series A Round",
    source: "Entrackr",
    date: "July 24, 2023",
    description:
      "Details about Dil Foods' successful pre-Series A funding round and the company's expansion plans.",
    url: "https://entrackr.com/2023/07/virtual-restaurant-operator-dil-foods-closes-pre-series-a-round/",
    imageUrl: "/media/entrackr.png",
    category: "press",
  },
];

const MediaCard = ({ item }: { item: MediaItem }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-contain transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-gray-500">
            {item.source}
          </span>
          <span className="text-sm text-gray-400">{item.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-dil-purple">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-dil-red hover:text-dil-purple transition-colors"
        >
          Read more <ExternalLink size={16} className="ml-1" />
        </a>
      </CardContent>
    </Card>
  );
};

const Media = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [email, setEmail] = useState("");

  const filteredItems =
    activeTab === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeTab);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubscribe = () => {
    console.log(email);

    if (!email.trim()) {
      toast.error("Please enter an email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Subscribed!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-purple-red py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Dil Foods in the Media
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest news, blogs, and press releases about
              Dil Foods and our mission to transform the food industry
            </p>
          </div>
        </section>

        {/* Media Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="blogs">Blogs</TabsTrigger>
                <TabsTrigger value="press">Press</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, index) => (
                    <MediaCard key={index} item={item} />
                  ))}
                </div>

                {filteredItems.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-xl text-gray-500">
                      No items found in this category.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest updates about
              Dil Foods
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-purple"
              />
              <Button
                onClick={handleSubscribe}
                className="bg-dil-purple hover:bg-dil-purple/90 text-white"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Media;
