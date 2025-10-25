import { Eye, EyeOff, Gamepad2, LogIn, UserPlus } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContexts/AuthContext";
import useTitle from "../Hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signInUser, signInWithGoogle, resetPassword } =
    useContext(AuthContext);

  const handleForgotPassword = () => {
    const email = document.querySelector('input[name="email"]').value;
    if (!email) {
      setFormError("Please enter your email to reset password.");
      toast.error("Please enter your email to reset password.");
      return;
    }
    setFormError("");
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        setFormError(error.message);
        toast.error(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Welcome back to Gamehub!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        setFormError(error.message);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleGoogleSignIn = () => {
    setFormError("");
    setIsLoading(true);
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Welcome to Gamehub!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        setFormError(error.message);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900/80 to-blue-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="w-12 h-12 text-purple-400 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            Sign in to your Gamehub account to continue your gaming journey
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-700/30 rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 pr-12 bg-slate-700/50 border border-purple-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
              >
                Forgot password?
              </button>
            </div>

            {/* Error Message */}
            {formError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm text-center">{formError}</p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <PuffLoader size={20} color="#ffffff" />
                  <span className="ml-2">Signing In...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  <span>Sign In</span>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-gray-200/25 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="mr-3"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-gray-400">
                New to Gamehub?{" "}
                <Link
                  to="/register"
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 flex items-center justify-center mt-2"
                >
                  <UserPlus className="w-4 h-4 mr-1" />
                  Create Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
