import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Link } from "react-router";
import Container from "../Components/Container";
import useTitle from "../Hooks/useTitle";

const ErrorPage = () => {
  useTitle("Error");

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 flex items-center justify-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Oops!
          </h1>
          <h2 className="text-3xl font-bold text-white mb-6">
            Something went wrong
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We encountered an unexpected error while processing your request.
            This might be due to a temporary issue or an invalid URL. Please try
            refreshing the page or navigate back to the home page.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleRefresh}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>

            <Link
              to="/"
              className="w-full sm:w-auto bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 border border-purple-600/30 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-slate-800/30 backdrop-blur-sm border border-purple-700/30 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-3">
              What you can do:
            </h3>
            <ul className="text-gray-300 text-left space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Check your internet connection
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Clear your browser cache and cookies
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Try accessing the page from a different browser
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Contact support if the problem persists
              </li>
            </ul>
          </div>

          {/* Error Code */}
          <div className="mt-8 text-gray-400">
            <p className="text-sm">
              Error Code: <span className="font-mono">404</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
