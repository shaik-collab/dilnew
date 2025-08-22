import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Order {
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
  pack11_price: number;
  pack21_price: number;
  total_amount: number;
  phone: string;
  email: string;
  latest_payment: {
    payment_order_id: string;
    razorpay_payment_id: string | null;
    payment_status: string;
    amount: number;
    amount_paise: number;
    currency: string;
    created_at: string;
  } | null;
}

interface OrderResponse {
  success: boolean;
  meta: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
  orders: Order[];
}

const OrderHistory: React.FC = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState<"phone" | "email">("phone");
  const [searchValue, setSearchValue] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [meta, setMeta] = useState<OrderResponse["meta"] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = async (page: number = 1) => {
    if (!searchValue.trim()) {
      setError("Please enter a phone number or email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        [searchType]: searchValue.trim(),
        page: page.toString(),
        per_page: "20",
      });

      const response = await axios.get<OrderResponse>(
        `${import.meta.env.VITE_API_BASE_URL}/modak_orders/by-contact?${params}`
      );

      if (response.data.success) {
        setOrders(response.data.orders);
        setMeta(response.data.meta);
        setCurrentPage(page);
      } else {
        setError("Failed to fetch orders");
      }
    } catch (error: any) {
      console.error("Error fetching orders:", error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Failed to fetch orders. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", label: "Pending" },
      confirmed: { color: "bg-blue-100 text-blue-800", label: "Confirmed" },
      processing: {
        color: "bg-purple-100 text-purple-800",
        label: "Processing",
      },
      shipped: { color: "bg-indigo-100 text-indigo-800", label: "Shipped" },
      delivered: { color: "bg-green-100 text-green-800", label: "Delivered" },
      cancelled: { color: "bg-red-100 text-red-800", label: "Cancelled" },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const getPaymentStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", label: "Pending" },
      created: { color: "bg-blue-100 text-blue-800", label: "Created" },
      captured: { color: "bg-green-100 text-green-800", label: "Paid" },
      failed: { color: "bg-red-100 text-red-800", label: "Failed" },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

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
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navbar />

      <div className="pt-16 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Order History
            </h1>
            <p className="text-gray-600">
              Track your modak orders and delivery status
            </p>
          </div>

          {/* Search Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search Orders</CardTitle>
              <CardDescription>
                Enter your phone number or email address to view your orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Search Type Toggle */}
                <div className="flex space-x-2">
                  <Button
                    variant={searchType === "phone" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSearchType("phone")}
                  >
                    📱 Phone Number
                  </Button>
                  <Button
                    variant={searchType === "email" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSearchType("email")}
                  >
                    📧 Email Address
                  </Button>
                </div>

                {/* Search Input */}
                <div>
                  <Label htmlFor="search">
                    {searchType === "phone" ? "Phone Number" : "Email Address"}
                  </Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="search"
                      type={searchType === "phone" ? "tel" : "email"}
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder={
                        searchType === "phone"
                          ? "Enter your phone number"
                          : "Enter your email address"
                      }
                      className="flex-1"
                    />
                    <Button
                      onClick={() => handleSearch(1)}
                      disabled={loading}
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      {loading ? "Searching..." : "Search"}
                    </Button>
                  </div>
                </div>

                {error && (
                  <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                    {error}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          {orders.length > 0 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Your Orders ({meta?.total || 0})
                </h2>
                <p className="text-sm text-gray-600">
                  Showing {orders.length} of {meta?.total || 0} orders
                </p>
              </div>

              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} className="shadow-sm">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            Order #{order.id}
                          </CardTitle>
                          <CardDescription>
                            Placed on {formatDateTime(order.created_at)}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-orange-600">
                            ₹{order.total_amount}
                          </div>
                          <div className="flex flex-col gap-2 mt-2">
                            <div className="flex items-center gap-1 justify-end">
                              <span className="text-xs text-gray-500">
                                Order:
                              </span>
                              {getStatusBadge(order.order_status)}
                            </div>
                            <div className="flex items-center gap-1 justify-end">
                              <span className="text-xs text-gray-500">
                                Payment:
                              </span>
                              {getPaymentStatusBadge(order.payment_status)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Order Details */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Order Details
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Name:</span>
                              <span className="font-medium">{order.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Phone:</span>
                              <span className="font-medium">{order.phone}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Email:</span>
                              <span className="font-medium">{order.email}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Address:</span>
                              <span className="font-medium text-right max-w-[200px]">
                                {order.address}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">City:</span>
                              <span className="font-medium">{order.city}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Pincode:</span>
                              <span className="font-medium">
                                {order.pincode}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Delivery Date:
                              </span>
                              <span className="font-medium">
                                {formatDate(order.delivery_date)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Order Summary */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Order Summary
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                11-Piece Packs:
                              </span>
                              <span className="font-medium">
                                {order.pack11_quantity} × ₹{order.pack11_price}{" "}
                                = ₹{order.pack11_quantity * order.pack11_price}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                21-Piece Packs:
                              </span>
                              <span className="font-medium">
                                {order.pack21_quantity} × ₹{order.pack21_price}{" "}
                                = ₹{order.pack21_quantity * order.pack21_price}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Delivery Fee:
                              </span>
                              <span className="font-medium">₹50</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between text-lg font-bold text-orange-600">
                              <span>Total Amount:</span>
                              <span>₹{order.total_amount}</span>
                            </div>
                          </div>

                          {/* Payment Details */}
                          {order.latest_payment && (
                            <div className="mt-4 pt-4 border-t">
                              <h5 className="font-semibold text-gray-800 mb-2">
                                Payment Details
                              </h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">
                                    Payment ID:
                                  </span>
                                  <span className="font-medium">
                                    {order.latest_payment.payment_order_id}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Amount:</span>
                                  <span className="font-medium">
                                    ₹{order.latest_payment.amount}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Status:</span>
                                  <span>
                                    {getPaymentStatusBadge(
                                      order.latest_payment.payment_status
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {meta && meta.last_page > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSearch(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>

                  <div className="flex items-center space-x-1">
                    {Array.from(
                      { length: meta.last_page },
                      (_, i) => i + 1
                    ).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSearch(page)}
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSearch(currentPage + 1)}
                    disabled={currentPage === meta.last_page}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* No Orders Found */}
          {!loading && orders.length === 0 && searchValue && !error && (
            <Card>
              <CardContent className="text-center py-8">
                <div className="text-gray-500">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-lg font-semibold mb-2">
                    No Orders Found
                  </h3>
                  <p className="text-sm">
                    No orders found for the provided{" "}
                    {searchType === "phone" ? "phone number" : "email address"}.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Contact Information */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Need Help?
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl mb-2">📱</div>
                <p className="font-semibold">WhatsApp Us</p>
                <Button
                  onClick={() => {
                    const phoneNumber = "916366960723";
                    const message = "Hi! I need help with my modak order.";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white mt-2"
                >
                  📱 WhatsApp Us
                </Button>
              </div>
              <div>
                <div className="text-2xl mb-2">✉️</div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-600">support@dilfoods.in</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🕒</div>
                <p className="font-semibold">Business Hours</p>
                <p className="text-gray-600">10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderHistory;
