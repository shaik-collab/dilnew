import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

interface OrderDetails {
  id: number;
  name: string;
  address: string;
  city: string;
  pincode: string;
  delivery_date: string;
  order_status: string;
  payment_status: string;
  created_at: string;
  pack11_quantity: number;
  pack21_quantity: number;
  pack11_price: number | null;
  pack21_price: number | null;
  total_amount: number;
  phone: string;
  email: string;
  latest_payment?: {
    payment_order_id: string;
    razorpay_payment_id: string | null;
    payment_status: string;
    amount: number;
    amount_paise: number;
    currency: string;
    created_at: string;
  };
}

const ThankYou: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        // Get order ID from URL params or location state
        const orderId =
          location.state?.orderId ||
          new URLSearchParams(location.search).get("orderId");

        if (!orderId) {
          setError("Order ID not found");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/modak_orders/${orderId}`
        );

        if (response.data.success) {
          setOrderDetails(response.data.order);
        } else {
          setError("Failed to fetch order details");
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
        setError("Failed to fetch order details");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [location]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const calculateTotalPieces = () => {
    if (!orderDetails) return 0;
    return (
      orderDetails.pack11_quantity * 11 + orderDetails.pack21_quantity * 21
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
        <Navbar />
        <div className="pt-16 py-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading order details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
        <Navbar />
        <div className="pt-16 py-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-red-500 text-6xl mb-4">❌</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
            <p className="text-gray-600 mb-6">
              {error || "Order details not found"}
            </p>
            <Button
              onClick={() => navigate("/special-offer")}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Back to Special Offers
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navbar />

      <div className="pt-16 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="text-green-500 text-6xl mb-4">✅</div>
            <Badge
              variant="default"
              className="mb-4 text-lg px-4 py-2 bg-green-600"
            >
              🎉 Order Placed Successfully! 🎉
            </Badge>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Thank You for Your Order!
            </h1>
            <p className="text-xl text-gray-600">
              We will contact you soon to confirm your order details
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Order Details
                </CardTitle>
                <CardDescription>
                  Your order has been successfully placed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-semibold">#{orderDetails.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="font-semibold">
                      {formatDateTime(orderDetails.created_at)}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-gray-500">Customer Name</p>
                  <p className="font-semibold">{orderDetails.name}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="font-semibold">{orderDetails.phone}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-semibold">{orderDetails.email}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Delivery Address</p>
                  <p className="font-semibold">{orderDetails.address}</p>
                  <p className="text-sm text-gray-600">
                    {orderDetails.city} - {orderDetails.pincode}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Delivery Date</p>
                  <p className="font-semibold">
                    {formatDate(orderDetails.delivery_date)}
                  </p>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Order Status</p>
                    <Badge
                      className={getStatusColor(orderDetails.order_status)}
                    >
                      {orderDetails.order_status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Status</p>
                    <Badge
                      className={getStatusColor(orderDetails.payment_status)}
                    >
                      {orderDetails.payment_status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary & Payment */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Order Summary
                </CardTitle>
                <CardDescription>
                  Product details and payment information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Product Details */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Product Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Product:</span>
                      <span className="font-semibold">Ukadiche Modak</span>
                    </div>
                    {orderDetails.pack11_quantity > 0 && (
                      <div className="flex justify-between">
                        <span>11-Piece Packs:</span>
                        <span>
                          {orderDetails.pack11_quantity} packs (
                          {orderDetails.pack11_quantity * 11} pieces)
                        </span>
                      </div>
                    )}
                    {orderDetails.pack21_quantity > 0 && (
                      <div className="flex justify-between">
                        <span>21-Piece Packs:</span>
                        <span>
                          {orderDetails.pack21_quantity} packs (
                          {orderDetails.pack21_quantity * 21} pieces)
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Total Pieces:</span>
                      <span className="font-semibold">
                        {calculateTotalPieces()} pieces
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Payment Details */}
                {orderDetails.latest_payment && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Payment Details
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Payment Order ID:</span>
                        <span className="font-mono text-sm">
                          {orderDetails.latest_payment.payment_order_id}
                        </span>
                      </div>
                      {orderDetails.latest_payment.razorpay_payment_id && (
                        <div className="flex justify-between">
                          <span>Razorpay Payment ID:</span>
                          <span className="font-mono text-sm">
                            {orderDetails.latest_payment.razorpay_payment_id}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Payment Status:</span>
                        <Badge
                          className={getStatusColor(
                            orderDetails.latest_payment.payment_status
                          )}
                        >
                          {orderDetails.latest_payment.payment_status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-semibold">
                          ₹{orderDetails.latest_payment.amount}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Currency:</span>
                        <span>{orderDetails.latest_payment.currency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment Date:</span>
                        <span>
                          {formatDateTime(
                            orderDetails.latest_payment.created_at
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <Separator />

                {/* Total Amount */}
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex justify-between text-lg font-bold text-orange-600">
                    <span>Total Amount:</span>
                    <span>₹{orderDetails.total_amount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 text-center space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                What's Next?
              </h3>
              <p className="text-blue-600">
                Our team will contact you within 24 hours to confirm your order
                and delivery details. You will receive updates via SMS and
                email.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/special-offer")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                size="lg"
              >
                🛒 Order More Modak
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="px-8 py-3"
                size="lg"
              >
                🏠 Go to Homepage
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Need Help?
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl mb-2">📞</div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-600">+91 9963442006</p>
              </div>
              <div>
                <div className="text-2xl mb-2">✉️</div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-600">rajesh@dilfoods.in</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🕒</div>
                <p className="font-semibold">Business Hours</p>
                <p className="text-gray-600">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;
