import { Check, Mail, Sparkles } from "lucide-react";
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
    <section className="bg-gradient-to-r from-slate-900/50 via-purple-900/50 to-slate-900/50 backdrop-blur-sm py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-900/50 via-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-purple-700/30 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            {/* Left: content */}
            <div className="text-white">
              <div className="flex items-center mb-4">
                <Mail className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Stay in the Game
                </h2>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Get the latest gaming news, exclusive app deals, beta access to
                new releases, and expert tips to level up your experience —
                delivered straight to your inbox.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-purple-600/20 border border-purple-400/30 rounded-full p-2 mr-3">
                    <Check className="w-4 h-4 text-purple-400" />
                  </span>
                  <span className="text-gray-300">Weekly curated picks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-purple-600/20 border border-purple-400/30 rounded-full p-2 mr-3">
                    <Check className="w-4 h-4 text-purple-400" />
                  </span>
                  <span className="text-gray-300">Exclusive beta access</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-purple-600/20 border border-purple-400/30 rounded-full p-2 mr-3">
                    <Check className="w-4 h-4 text-purple-400" />
                  </span>
                  <span className="text-gray-300">Gaming tips & tricks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-purple-600/20 border border-purple-400/30 rounded-full p-2 mr-3">
                    <Check className="w-4 h-4 text-purple-400" />
                  </span>
                  <span className="text-gray-300">Unsubscribe anytime</span>
                </li>
              </ul>

              <form onSubmit={handleSubmit} className="w-full">
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
                    placeholder="Enter your gaming email"
                    className="flex-1 px-4 py-3 bg-slate-800/50 border border-purple-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                    aria-invalid={!!error}
                    aria-describedby="newsletter-help"
                  />
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Joining...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Join Now
                      </>
                    )}
                  </button>
                </div>
                <p id="newsletter-help" className="sr-only">
                  We'll only use your email to send gaming updates. No spam.
                </p>
              </form>

              <div className="mt-4" aria-live="polite">
                {error && (
                  <p className="text-red-400 flex items-center">
                    <span className="w-4 h-4 mr-2">⚠️</span>
                    {error}
                  </p>
                )}
                {success && (
                  <p className="text-green-400 flex items-center">
                    <span className="w-4 h-4 mr-2">✅</span>
                    {success}
                  </p>
                )}
              </div>
            </div>

            {/* Right: illustration */}
            <div className="hidden lg:flex items-center justify-center p-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                <svg
                  role="img"
                  aria-label="gaming newsletter illustration"
                  width="400"
                  height="280"
                  viewBox="0 0 400 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10"
                >
                  <rect
                    x="0"
                    y="0"
                    width="400"
                    height="280"
                    rx="24"
                    fill="rgba(139, 92, 246, 0.1)"
                    stroke="rgba(139, 92, 246, 0.3)"
                    strokeWidth="2"
                  />
                  <g transform="translate(40,40)">
                    {/* Gaming controller */}
                    <rect
                      x="20"
                      y="60"
                      width="120"
                      height="80"
                      rx="12"
                      fill="rgba(139, 92, 246, 0.2)"
                      stroke="rgba(139, 92, 246, 0.4)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="50"
                      cy="90"
                      r="8"
                      fill="rgba(139, 92, 246, 0.6)"
                    />
                    <circle
                      cx="110"
                      cy="90"
                      r="8"
                      fill="rgba(139, 92, 246, 0.6)"
                    />
                    <rect
                      x="70"
                      y="110"
                      width="20"
                      height="8"
                      rx="4"
                      fill="rgba(139, 92, 246, 0.6)"
                    />

                    {/* Mobile phone */}
                    <rect
                      x="160"
                      y="40"
                      width="80"
                      height="140"
                      rx="8"
                      fill="rgba(139, 92, 246, 0.15)"
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="2"
                    />
                    <rect
                      x="175"
                      y="55"
                      width="50"
                      height="8"
                      rx="4"
                      fill="rgba(139, 92, 246, 0.4)"
                    />
                    <rect
                      x="175"
                      y="70"
                      width="35"
                      height="6"
                      rx="3"
                      fill="rgba(139, 92, 246, 0.3)"
                    />
                    <rect
                      x="175"
                      y="85"
                      width="40"
                      height="6"
                      rx="3"
                      fill="rgba(139, 92, 246, 0.3)"
                    />
                    <circle
                      cx="200"
                      cy="155"
                      r="4"
                      fill="rgba(139, 92, 246, 0.5)"
                    />

                    {/* Stars and sparkles */}
                    <path
                      d="M280 60 L285 70 L295 70 L287 78 L290 88 L280 82 L270 88 L273 78 L265 70 L275 70 Z"
                      fill="rgba(236, 72, 153, 0.6)"
                    />
                    <path
                      d="M320 100 L323 105 L328 105 L324 109 L326 114 L320 111 L314 114 L316 109 L312 105 L317 105 Z"
                      fill="rgba(139, 92, 246, 0.6)"
                    />
                    <circle
                      cx="260"
                      cy="120"
                      r="3"
                      fill="rgba(236, 72, 153, 0.5)"
                    />
                    <circle
                      cx="300"
                      cy="40"
                      r="2"
                      fill="rgba(139, 92, 246, 0.4)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
