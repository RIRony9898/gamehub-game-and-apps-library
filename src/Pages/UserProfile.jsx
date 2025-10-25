import {
  Calendar,
  Edit,
  Gamepad2,
  Key,
  LogOut,
  Mail,
  Package,
  Shield,
  Star,
  Trophy,
  User,
} from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContexts/AuthContext";
import Container from "../Components/Container";
import useTitle from "../Hooks/useTitle";

const UserProfile = () => {
  useTitle("Profile");
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signed out successfully!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Failed to sign out. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900/80 to-blue-900 py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-700/30 rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full ring-4 ring-purple-400/30 overflow-hidden">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt="User Avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mr-3">
                    {user.displayName || "Gamer"}
                  </h1>
                  <div className="flex items-center space-x-1 bg-purple-600/20 px-3 py-1 rounded-full">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-purple-300 text-sm font-medium">
                      Pro Gamer
                    </span>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-4 flex items-center justify-center md:justify-start">
                  <Mail className="w-5 h-5 mr-2 text-purple-400" />
                  {user.email}
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="flex items-center space-x-2 bg-slate-700/50 px-4 py-2 rounded-xl">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">
                      Joined{" "}
                      {new Date(
                        user.metadata?.creationTime
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-600/20 px-4 py-2 rounded-xl">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 text-sm">
                      {user.emailVerified ? "Verified" : "Unverified"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Account Information */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-700/30 rounded-2xl shadow-2xl p-6">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">
                  Account Information
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <p className="text-lg text-white flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-purple-400" />
                    {user.email}
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Account Status
                  </label>
                  <div className="flex items-center">
                    {user.emailVerified ? (
                      <>
                        <Shield className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-green-400 font-semibold">
                          Verified Account
                        </span>
                      </>
                    ) : (
                      <>
                        <Shield className="w-5 h-5 text-red-400 mr-2" />
                        <span className="text-red-400 font-semibold">
                          Unverified Account
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Member Since
                  </label>
                  <p className="text-lg text-white flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                    {new Date(user.metadata?.creationTime).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-700/30 rounded-2xl shadow-2xl p-6">
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
              </div>
              <div className="space-y-4">
                <button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                  onClick={() => navigate("/profileUpdate")}
                >
                  <Edit className="w-5 h-5 mr-2" />
                  Edit Profile
                </button>

                <button
                  className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 border border-purple-600/30 flex items-center justify-center"
                  onClick={() => navigate("/passwordChange")}
                >
                  <Key className="w-5 h-5 mr-2" />
                  Change Password
                </button>

                <button
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center"
                  onClick={() => navigate("/installed")}
                >
                  <Package className="w-5 h-5 mr-2" />
                  Installed Apps
                </button>

                <button
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-red-500/25 flex items-center justify-center"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Gaming Stats Section */}
          <div className="mt-8 bg-slate-800/50 backdrop-blur-sm border border-purple-700/30 rounded-2xl shadow-2xl p-6">
            <div className="flex items-center mb-6">
              <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Gaming Stats</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <p className="text-gray-300">Games Played</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">0</div>
                <p className="text-gray-300">Apps Installed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">0</div>
                <p className="text-gray-300">Achievements</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;
