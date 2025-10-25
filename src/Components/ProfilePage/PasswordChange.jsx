import { Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContexts/AuthContext";
import Container from "../../Components/Container";
import useTitle from "../../Hooks/useTitle";

const PasswordChange = () => {
  useTitle("Change Password");
  const { changePassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");

    if (!validatePassword(formData.newPassword)) {
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await changePassword(formData.newPassword);
      toast.success("Password changed successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Error changing password:", error);
      if (error.code === "auth/weak-password") {
        toast.error("New password is too weak.");
      } else {
        toast.error("Failed to change password. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className=" py-10 bg-gradient-to-br from-blue-900 via-purple-900/80 to-blue-900">
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-700 shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-white">
              Change Password
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white mr-2">
                    New Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className="input input-bordered pr-10 w-full"
                    placeholder="Enter new password"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer z-50"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white mr-2">
                    Confirm New Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="input input-bordered pr-10 w-full"
                    placeholder="Confirm new password"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer z-50"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </span>
                </div>
              </div>

              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  className={`bg-purple-600 hover:bg-purple-700 text-white border-purple-600 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex-1 ${
                    loading ? "loading" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Changing..." : "Change Password"}
                </button>
                <button
                  type="button"
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-purple-400 hover:border-purple-300 px-8 py-3 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 flex-1"
                  onClick={() => navigate("/profile")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PasswordChange;
