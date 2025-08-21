import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const SpecialOffer: React.FC = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(2); // Minimum 2 packs
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [deliveryDate, setDeliveryDate] = useState<string>("");

  // Pack configurations
  const packConfigs = {
    11: { price: 699, minQuantity: 2 },
    21: { price: 1299, minQuantity: 1 },
  };

  const [pack11Quantity, setPack11Quantity] = useState<number>(0);
  const [pack21Quantity, setPack21Quantity] = useState<number>(0);

  const subtotal =
    pack11Quantity * packConfigs[11].price +
    pack21Quantity * packConfigs[21].price;
  const deliveryFee = 50;
  const totalPrice = subtotal + deliveryFee;
  const totalPieces = pack11Quantity * 11 + pack21Quantity * 21;

  // Cities list
  const cities = [
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Mumbai",
    "Mysore",
    "Coimbatore",
    "Ahmedabad",
  ];

  // Generate delivery dates from tomorrow till August 25th
  const generateDeliveryDates = () => {
    const dates = [];
    const today = new Date();
    const currentYear = today.getFullYear();

    // Create dates using local time to avoid timezone issues
    const tomorrow = new Date(
      currentYear,
      today.getMonth(),
      today.getDate() + 1
    );
    const endDate = new Date(currentYear, 7, 27); // August 27th (month is 0-indexed)

    // Generate dates from tomorrow till August 27th
    let currentDate = new Date(tomorrow);

    // Use simple date comparison
    while (currentDate <= endDate) {
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const dateString = `${year}-${month}-${day}`;

      dates.push({
        value: dateString,
        label: currentDate.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const deliveryDates = generateDeliveryDates();

  const handlePack11QuantityChange = (increment: number) => {
    let newQuantity = pack11Quantity + increment;

    // If incrementing from 0, jump to minimum of 2
    if (increment > 0 && pack11Quantity === 0) {
      newQuantity = 2;
    }

    // If decrementing from 2, go to 0
    if (increment < 0 && pack11Quantity === 2) {
      newQuantity = 0;
    }

    // Set the quantity (can be 0, 2, 3, 4, etc.)
    setPack11Quantity(newQuantity);
  };

  const handlePack21QuantityChange = (increment: number) => {
    const newQuantity = Math.max(0, pack21Quantity + increment);
    setPack21Quantity(newQuantity);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCityChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      city: value,
    }));
  };

  const handleDeliveryDateChange = (value: string) => {
    setDeliveryDate(value);
  };

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Add marquee animation styles
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Create order
  const createOrder = async () => {
    try {
      setLoading(true);

      const orderPayload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
        pack11_quantity: pack11Quantity,
        pack21_quantity: pack21Quantity,
        pack11_price: packConfigs[11].price,
        pack21_price: packConfigs[21].price,
        delivery_date: deliveryDate,
      };

      const orderResponse = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/modak_orders`,
        orderPayload
      );

      if (orderResponse.data.success) {
        return orderResponse.data.order.id; // Return the order ID
      } else {
        alert("Failed to create order.");
        return null;
      }
    } catch (error) {
      console.error("Error creating order:", error);
      if (error.response?.data?.errors) {
        const errorMessages = Object.values(error.response.data.errors)
          .flat()
          .join(", ");
        alert(`Validation Error: ${errorMessages}`);
      } else {
        alert("Failed to create order. Please try again.");
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Process payment
  const processPayment = async (orderId: number) => {
    try {
      setLoading(true);

      // Step 2: Create Razorpay payment order
      const paymentOrderResponse = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/modak_orders/${orderId}/payment`
      );

      if (paymentOrderResponse.data.success) {
        const razorpayOrder = paymentOrderResponse.data.razorpay_order;
        const payment = paymentOrderResponse.data.payment;

        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Your Razorpay key
          amount: razorpayOrder.amount, // Already in paise
          currency: "INR",
          name: "Dilfoods",
          description: "Modak Order Payment",
          image: "/lovable-uploads/b743a878-95c1-4663-b49a-820eec6a6800.png", // Dilfoods logo
          order_id: razorpayOrder.id,
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
          },
          notes: {
            address: formData.address,
            order_id: orderId,
          },
          theme: { color: "#A91D3A" },
          handler: function (response: any) {
            handlePaymentSuccess(response, orderId);
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        alert("Failed to create payment order.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Failed to process payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (paymentData: any, orderId: number) => {
    try {
      // Step 5: Verify payment with backend
      const verifyResponse = await axios.post(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/modak_orders/${orderId}/payment/verify`,
        {
          razorpay_order_id: paymentData.razorpay_order_id,
          razorpay_payment_id: paymentData.razorpay_payment_id,
          razorpay_signature: paymentData.razorpay_signature,
        }
      );

      if (verifyResponse.data.success) {
        // Redirect to thank you page with order ID
        navigate("/thank-you", {
          state: { orderId: orderId },
          replace: true,
        });
      } else {
        alert("Payment verification failed. Please contact support.");
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      alert(
        "Payment completed but verification failed. Please contact support."
      );
    }
  };

  const handleOrder = async () => {
    // Validate form
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.pincode ||
      !deliveryDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Validate pack quantities
    if (pack11Quantity < 2 && pack21Quantity < 1) {
      alert(
        "Please select at least 2 packs of 11-piece or 1 pack of 21-piece."
      );
      return;
    }

    // Step 1: Create the order
    const orderId = await createOrder();

    if (orderId) {
      // Step 2: Process payment
      await processPayment(orderId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50  mt-10">
      <Navbar />
      {/* Moving Banner */}
      <div className="bg-red-600 text-white py-3 overflow-hidden mt-16">
        <div className="animate-marquee whitespace-nowrap">
          <span className="inline-block mx-4">
            🚨 PRE-ORDERING CLOSES ON AUGUST 26TH! LAST DELIVERY DATE: AUGUST
            27TH! 🚨
          </span>
          <span className="inline-block mx-4">
            🚨 PRE-ORDERING CLOSES ON AUGUST 26TH! LAST DELIVERY DATE: AUGUST
            27TH! 🚨
          </span>
          <span className="inline-block mx-4">
            🚨 PRE-ORDERING CLOSES ON AUGUST 26TH! LAST DELIVERY DATE: AUGUST
            27TH! 🚨
          </span>
        </div>
      </div>

      <div className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="destructive" className="mb-4 text-lg px-4 py-2">
              🎉 SPECIAL OFFER - LIMITED TIME! 🎉
            </Badge>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Authentic Homemade Modak
            </h1>
            <p className="text-lg text-gray-600">
              Experience the divine taste of traditional Indian sweets
            </p>
          </div>

          {/* Mobile Layout - No Cards */}
          <div className="md:hidden space-y-6">
            {/* Product Section Mobile */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-orange-600 mb-2">
                  Ukadiche Modak
                </h2>
                <p className="text-gray-600">
                  Handcrafted with love using traditional recipes passed down
                  through generations
                </p>
              </div>

              {/* Product Image */}
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/modak.png"
                  alt="Authentic Homemade Modak"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Description */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Product Details:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Made with premium rice flour and jaggery</li>
                  <li>• Traditional steam cooking method</li>
                  <li>• No artificial preservatives</li>
                  <li>• Perfect for festivals and celebrations</li>
                  <li>• Freshly made and hygienically packed</li>
                </ul>
              </div>

              <Separator />

              {/* Pack Selection */}
              <div className="space-y-4">
                <div>
                  <Label className="text-lg font-medium">
                    Select Pack Quantities
                  </Label>

                  {/* 11-Piece Pack */}
                  <div className="mt-4 p-4 border-2 border-orange-200 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">11-Piece Pack</h4>
                        <p className="text-sm text-gray-600">₹699 per pack</p>
                      </div>
                      <div className="text-sm text-gray-500">Min: 2 packs</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Label className="text-sm">Quantity:</Label>
                      <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
                        <button
                          type="button"
                          onClick={() => handlePack11QuantityChange(-1)}
                          disabled={pack11Quantity <= 0}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-r border-gray-300"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <div className="w-16 h-10 flex items-center justify-center text-lg font-semibold text-gray-900">
                          {pack11Quantity}
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePack11QuantityChange(1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 border-l border-gray-300"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                      <span className="text-sm text-gray-600">
                        ({pack11Quantity * 11} pieces)
                      </span>
                    </div>
                  </div>

                  {/* 21-Piece Pack */}
                  <div className="mt-4 p-4 border-2 border-orange-200 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">21-Piece Pack</h4>
                        <p className="text-sm text-gray-600">₹1299 per pack</p>
                      </div>
                      <div className="text-sm text-gray-500">Min: 1 pack</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Label className="text-sm">Quantity:</Label>
                      <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
                        <button
                          type="button"
                          onClick={() => handlePack21QuantityChange(-1)}
                          disabled={pack21Quantity <= 0}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-r border-gray-300"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <div className="w-16 h-10 flex items-center justify-center text-lg font-semibold text-gray-900">
                          {pack21Quantity}
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePack21QuantityChange(1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 border-l border-gray-300"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                      <span className="text-sm text-gray-600">
                        ({pack21Quantity * 21} pieces)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Form for Mobile */}
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Pre Order Your Modaks
                  </h2>
                  <p className="text-gray-600">
                    Fill in your details to complete the order
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete delivery address"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Select
                      value={formData.city}
                      onValueChange={handleCityChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="Enter pincode"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="deliveryDate">Delivery Date *</Label>
                    <Select
                      value={deliveryDate}
                      onValueChange={handleDeliveryDateChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select delivery date" />
                      </SelectTrigger>
                      <SelectContent>
                        {deliveryDates.map((date) => (
                          <SelectItem key={date.value} value={date.value}>
                            {date.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                {/* Order Summary for Mobile */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Product:</span>
                      <span>Modak</span>
                    </div>
                    <div className="flex justify-between">
                      <span>11-Piece Packs:</span>
                      <span>
                        {pack11Quantity} packs ({pack11Quantity * 11} pieces)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>21-Piece Packs:</span>
                      <span>
                        {pack21Quantity} packs ({pack21Quantity * 21} pieces)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Pieces:</span>
                      <span>{totalPieces} pieces</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Date:</span>
                      <span>
                        {deliveryDate
                          ? new Date(deliveryDate).toLocaleDateString()
                          : "Not selected"}
                      </span>
                    </div>
                    {totalPieces > 0 && (
                      <>
                        <Separator />
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Fee:</span>
                          <span>₹{deliveryFee}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-bold text-orange-600">
                          <span>Total Amount:</span>
                          <span>₹{totalPrice}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Order Button for Mobile */}
                <Button
                  onClick={handleOrder}
                  disabled={loading}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-3"
                  size="lg"
                >
                  {loading
                    ? "Processing..."
                    : `🛒 Place Order - ₹${totalPrice}`}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * All fields are required. Payment will be processed securely
                  through Razorpay.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout - With Cards */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* Product Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">
                  Ukadiche Modak
                </CardTitle>
                <CardDescription>
                  Handcrafted with love using traditional recipes passed down
                  through generations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Product Image */}
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/modak.png"
                    alt="Authentic Homemade Modak"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Description */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Product Details:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Made with premium rice flour and jaggery</li>
                    <li>• Traditional steam cooking method</li>
                    <li>• No artificial preservatives</li>
                    <li>• Perfect for festivals and celebrations</li>
                    <li>• Freshly made and hygienically packed</li>
                  </ul>
                </div>

                <Separator />

                {/* Pack Selection */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-lg font-medium">
                      Select Pack Quantities
                    </Label>

                    {/* 11-Piece Pack */}
                    <div className="mt-4 p-4 border-2 border-orange-200 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">
                            11-Piece Pack
                          </h4>
                          <p className="text-sm text-gray-600">₹699 per pack</p>
                        </div>
                        <div className="text-sm text-gray-500">
                          Min: 2 packs
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Label className="text-sm">Quantity:</Label>
                        <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
                          <button
                            type="button"
                            onClick={() => handlePack11QuantityChange(-1)}
                            disabled={pack11Quantity <= 0}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-r border-gray-300"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                          </button>
                          <div className="w-16 h-10 flex items-center justify-center text-lg font-semibold text-gray-900">
                            {pack11Quantity}
                          </div>
                          <button
                            type="button"
                            onClick={() => handlePack11QuantityChange(1)}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 border-l border-gray-300"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </button>
                        </div>
                        <span className="text-sm text-gray-600">
                          ({pack11Quantity * 11} pieces)
                        </span>
                      </div>
                    </div>

                    {/* 21-Piece Pack */}
                    <div className="mt-4 p-4 border-2 border-orange-200 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">
                            21-Piece Pack
                          </h4>
                          <p className="text-sm text-gray-600">
                            ₹1299 per pack
                          </p>
                        </div>
                        <div className="text-sm text-gray-500">Min: 1 pack</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Label className="text-sm">Quantity:</Label>
                        <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
                          <button
                            type="button"
                            onClick={() => handlePack21QuantityChange(-1)}
                            disabled={pack21Quantity <= 0}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border-r border-gray-300"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                          </button>
                          <div className="w-16 h-10 flex items-center justify-center text-lg font-semibold text-gray-900">
                            {pack21Quantity}
                          </div>
                          <button
                            type="button"
                            onClick={() => handlePack21QuantityChange(1)}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 border-l border-gray-300"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          </button>
                        </div>
                        <span className="text-sm text-gray-600">
                          ({pack21Quantity * 21} pieces)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Pre Order Your Modaks.
                </CardTitle>
                <CardDescription>
                  Fill in your details to complete the order
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
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
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete delivery address"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Select
                      value={formData.city}
                      onValueChange={handleCityChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="Enter pincode"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="deliveryDate">Delivery Date *</Label>
                  <Select
                    value={deliveryDate}
                    onValueChange={handleDeliveryDateChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select delivery date" />
                    </SelectTrigger>
                    <SelectContent>
                      {deliveryDates.map((date) => (
                        <SelectItem key={date.value} value={date.value}>
                          {date.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Product:</span>
                      <span>Modak</span>
                    </div>
                    <div className="flex justify-between">
                      <span>11-Piece Packs:</span>
                      <span>
                        {pack11Quantity} packs ({pack11Quantity * 11} pieces)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>21-Piece Packs:</span>
                      <span>
                        {pack21Quantity} packs ({pack21Quantity * 21} pieces)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Pieces:</span>
                      <span>{totalPieces} pieces</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Date:</span>
                      <span>
                        {deliveryDate
                          ? new Date(deliveryDate).toLocaleDateString()
                          : "Not selected"}
                      </span>
                    </div>
                    {totalPieces > 0 && (
                      <>
                        <Separator />
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Fee:</span>
                          <span>₹{deliveryFee}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-bold text-orange-600">
                          <span>Total Amount:</span>
                          <span>₹{totalPrice}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Order Button */}
                <Button
                  onClick={handleOrder}
                  disabled={loading}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-3"
                  size="lg"
                >
                  {loading
                    ? "Processing..."
                    : `🛒 Place Order - ₹${totalPrice}`}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * All fields are required. Payment will be processed securely
                  through Razorpay.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 grid md:grid-cols-3 gap-2">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-gray-600">Same day delivery in select areas</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment gateway</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-semibold">Quality Assured</h3>
              <p className="text-gray-600">Premium quality ingredients only</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpecialOffer;
