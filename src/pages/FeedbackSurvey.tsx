import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const FeedbackSurvey = () => {
  const { id, restaurantName, encryptedName } = useParams<{ id: string; restaurantName: string; encryptedName: string }>();
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [npsScore, setNpsScore] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const decryptRestaurantId = (encryptedId: string): string => {
    try {
      const decoded = atob(encryptedId);
      const num = parseInt(decoded);
      if (!isNaN(num) && num >= 1 && num <= 2000) {
        return decoded;
      }
      return encryptedId;
    } catch (error) {
      console.error("Error decrypting restaurant ID:", error);
      return encryptedId;
    }
  };

  const decryptRestaurantName = (encryptedName: string): string => {
    try {
      return atob(encryptedName);
    } catch (error) {
      console.error("Error decrypting restaurant name:", error);
      return "";
    }
  };

  // Check if survey is valid on page load
  useEffect(() => {
    const validateSurvey = async () => {
      try {
        const decryptedRestaurantId = decryptRestaurantId(id);
        const res = await axios.get(`${apiUrl.replace(/\/+$/, '')}/feedback-surveys/check?restaurantId=${decryptedRestaurantId}`);
        console.log("Validation response:", res.data);
        
        // If should_show_survey is false, show submitted screen
        if (!res.data.should_show_survey) {
          setIsSubmitted(true);
        }
      } catch (error: any) {
        console.error("Error validating survey:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      validateSurvey();
    }
  }, [id]);

  const onSubmit = async (data: any) => {
    if (npsScore === null) {
      toast.error("Please select a score");
      return;
    }

    // Validate URL hasn't been tampered with
    if (id && restaurantName && encryptedName) {
      const decryptedName = decryptRestaurantName(encryptedName);
      
      if (decryptedName !== restaurantName) {
        toast.error("Invalid URL - name mismatch");
        return;
      }
      
      const decryptedRestaurantId = decryptRestaurantId(id);
      
      setIsSaving(true);
      try {
        const payload = {
          restaurantId: decryptedRestaurantId,
          restaurantName: restaurantName,
          name: data.name || "",
          npsScore: npsScore,
        };

        const res = await axios.post(`${apiUrl.replace(/\/+$/, '')}/feedback-surveys`, payload);

        if (res.data.message === "Feedback survey submitted successfully") {
          setIsSubmitted(true);
        }
      } catch (error: any) {
        console.error("Error submitting feedback:", error);
        toast.error(
          error.response?.data?.message || "Failed to submit feedback. Please try again."
        );
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dil-purple"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        ) : isSubmitted ? (
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Response Submitted</h2>
            <p className="text-gray-600">Thank you for your feedback!</p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Restaurant Partner Feedback Survey
            </h1>
            <p className="text-center text-gray-600 mb-8">
              for {restaurantName || "Restaurant"}
            </p>

            {/* Enter your name */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Enter your name
              </h2>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dil-purple focus:border-transparent"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">Name is required</p>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                On a scale of 0-10, how likely are you to recommend our partnership program to another restaurant owner?
              </h2>
              
              <div className="flex justify-between gap-2 mb-4">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                  <button
                    key={score}
                    type="button"
                    onClick={() => setNpsScore(score)}
                    className={`flex-1 h-12 rounded-lg flex items-center justify-center font-semibold transition-all ${
                      npsScore === score
                        ? "bg-dil-purple text-white transform scale-105"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {score}
                  </button>
                ))}
              </div>

              <div className="flex justify-between text-xs text-gray-500 px-2">
                <span>Not at all likely</span>
                <span>Extremely likely</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isSaving || npsScore === null}
              className="w-full bg-dil-purple text-white py-3 px-4 rounded-lg hover:bg-dil-purple/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? "Submitting..." : "Submit Feedback"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackSurvey;
