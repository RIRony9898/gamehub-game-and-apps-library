import { Check, Eye, EyeOff, Gamepad2, LogIn, UserPlus, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContexts/AuthContext";
import useTitle from "../Hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  const validatePassword = (password) => {
    setPasswordError("");
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!validatePassword(password)) {
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name)
          .then(() => {
            toast.success("Welcome to Gamehub! Your account has been created.");
            navigate("/");
          })
          .catch((error) => {
            console.log("Error:", error.message);
            toast.error("Account created but profile update failed.");
          });
      })
      .catch((error) => {
        console.log("Error:", error.message);
        setPasswordError(error.message);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const passwordRequirements = [
    { test: password.length >= 6, text: "At least 6 characters" },
    { test: /[A-Z]/.test(password), text: "One uppercase letter" },
    { test: /[a-z]/.test(password), text: "One lowercase letter" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900/80 to-blue-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="w-12 h-12 text-purple-400 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join Gamehub
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            Create your account and start your gaming adventure
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-700/30 rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Requirements */}
              {password && (
                <div className="mt-3 space-y-2">
                  {passwordRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm"
                    >
                      {req.test ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <X className="w-4 h-4 text-red-400" />
                      )}
                      <span
                        className={req.test ? "text-green-400" : "text-red-400"}
                      >
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  className="w-full px-4 py-3 pr-12 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {passwordError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm">{passwordError}</p>
              </div>
            )}

            {/* Register Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <PuffLoader size={20} color="#ffffff" />
                  <span className="ml-2">Creating Account...</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5 mr-2" />
                  Create Account
                </>
              )}
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 flex items-center justify-center mt-2"
                >
                  <LogIn className="w-4 h-4 mr-1" />
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
