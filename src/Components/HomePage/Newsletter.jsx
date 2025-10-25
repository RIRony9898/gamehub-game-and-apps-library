import { Check } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    // Simulate API call — replace with real integration as needed
    setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          const saved = JSON.parse(
            localStorage.getItem("subscribedEmails") || "[]"
          );
          localStorage.setItem(
            "subscribedEmails",
            JSON.stringify([
              ...saved,
              { email, date: new Date().toISOString() },
            ])
          );
        }

        setSuccess(
          "Thanks for subscribing! Check your inbox for a welcome message."
        );
        setEmail("");
      } catch {
        setError("Something went wrong — please try again later.");
      } finally {
        setSubmitting(false);
      }
    }, 800);
  };

  return (
    <section className="my-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-6 lg:p-10">
            {/* Left: content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Join our Newsletter
              </h2>
              <p className="mt-3 text-indigo-100 max-w-prose">
                Get curated game & app picks, release notes, exclusive promos,
                and tips to get the most from your installs — delivered weekly.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-white/10 rounded-full p-2 mr-3">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  <span>Curated weekly picks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-white/10 rounded-full p-2 mr-3">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  <span>Early access & promos</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-white/10 rounded-full p-2 mr-3">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  <span>Top tips for installs</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-white/10 rounded-full p-2 mr-3">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  <span>No spam — unsubscribe anytime</span>
                </li>
              </ul>

              <form onSubmit={handleSubmit} className="mt-6 w-full">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none"
                    aria-invalid={!!error}
                    aria-describedby="newsletter-help"
                  />
                  <button
                    type="submit"
                    className="btn bg-white text-violet-600 hover:bg-white/90 border-0 px-6 rounded-lg font-semibold"
                    disabled={submitting}
                  >
                    {submitting ? "Subscribing…" : "Subscribe"}
                  </button>
                </div>
                <p id="newsletter-help" className="sr-only">
                  We'll only use your email to send the newsletter. No spam.
                </p>
              </form>

              <div className="mt-4" aria-live="polite">
                {error && <p className="text-yellow-200">{error}</p>}
                {success && (
                  <p className="flex items-center text-green-100">{success}</p>
                )}
              </div>
            </div>

            {/* Right: illustration */}
            <div className="hidden lg:flex items-center justify-center p-4">
              <svg
                role="img"
                aria-label="newsletter illustration"
                width="340"
                height="220"
                viewBox="0 0 340 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y="0"
                  width="340"
                  height="220"
                  rx="20"
                  fill="rgba(255,255,255,0.06)"
                />
                <g transform="translate(24,24)">
                  <rect
                    x="0"
                    y="0"
                    width="160"
                    height="120"
                    rx="12"
                    fill="white"
                    opacity="0.06"
                  />
                  <rect
                    x="12"
                    y="12"
                    width="136"
                    height="20"
                    rx="6"
                    fill="white"
                    opacity="0.12"
                  />
                  <rect
                    x="12"
                    y="40"
                    width="110"
                    height="12"
                    rx="6"
                    fill="white"
                    opacity="0.08"
                  />
                  <rect
                    x="12"
                    y="60"
                    width="130"
                    height="12"
                    rx="6"
                    fill="white"
                    opacity="0.08"
                  />
                  <rect
                    x="12"
                    y="82"
                    width="90"
                    height="12"
                    rx="6"
                    fill="white"
                    opacity="0.08"
                  />

                  <circle cx="220" cy="60" r="36" fill="white" opacity="0.06" />
                  <path
                    d="M200 46c8-6 18-9 28-9s20 3 28 9"
                    stroke="white"
                    strokeOpacity="0.12"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
