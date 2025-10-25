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
    <Container>
      <div className="min-h-screen py-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-base-100 shadow-lg rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="avatar">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt="User Avatar"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">
                  {user.displayName || "User"}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{user.email}</p>
                <div className="badge badge-primary badge-lg">
                  Member since{" "}
                  {new Date(user.metadata?.creationTime).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-base-100 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Account Information
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="text-lg">{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Verified
                  </label>
                  <p className="text-lg">
                    {user.emailVerified ? (
                      <span className="text-green-600 font-semibold">
                        ✓ Verified
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        ✗ Not Verified
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Account Created
                  </label>
                  <p className="text-lg">
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

            {/* Quick Actions Buttons */}
            <div className="bg-base-100 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  className="btn btn-primary w-full"
                  onClick={() => navigate("/profileUpdate")}
                >
                  Edit Profile
                </button>
                <button
                  className="btn btn-outline w-full"
                  onClick={() => navigate("/passwordChange")}
                >
                  Change Password
                </button>
                <button
                  className="btn btn-outline btn-warning w-full"
                  onClick={() => navigate("/installed")}
                >
                  View Installed Apps
                </button>
                <button
                  className="btn btn-error w-full"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
