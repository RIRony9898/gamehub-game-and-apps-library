import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContexts/AuthContext";
import Container from "../../Components/Container";
import useTitle from "../../Hooks/useTitle";

const ProfileUpdate = () => {
  useTitle("Update Profile");
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile(formData.displayName, formData.photoURL);
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="min-h-screen py-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-base-100 shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Update Profile
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Display Name</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  placeholder="Enter your display name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture URL</span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  placeholder="Enter profile picture URL"
                />
              </div>

              {/* Preview */}
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-semibold">Preview</h3>
                <div className="avatar">
                  <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        formData.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                      alt="Profile Preview"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-xl font-medium">
                  {formData.displayName || "Display Name"}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className={`btn btn-primary flex-1 ${
                    loading ? "loading" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Profile"}
                </button>
                <button
                  type="button"
                  className="btn btn-outline flex-1"
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

export default ProfileUpdate;
