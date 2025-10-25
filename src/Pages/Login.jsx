import React, { useContext, useState } from "react";
import Container from "../Components/Container";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContexts/AuthContext";
import useTitle from "../Hooks/useTitle";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

const Login = () => {
  useTitle("Login");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');
  const { signInUser, signInWithGoogle, resetPassword } = useContext(AuthContext);

  const handleForgotPassword = () => {
    const email = document.querySelector('input[name="email"]').value;
    if (!email) {
      setFormError('Please enter your email to reset password.');
      toast.error('Please enter your email to reset password.');
      return;
    }
    setFormError('');
    resetPassword(email)
      .then(() => {
        toast.success('Password reset email sent! Check your inbox.');
      })
      .catch((error) => {
        setFormError(error.message);
        toast.error(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        setFormError(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    setFormError('');
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        setFormError(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <Container>
        <div className="card bg-base-100 w-full max-w-sm mx-auto my-5 shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold mx-auto">Login now!</h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* password */}
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input pr-10 w-full"
                    placeholder="Password"
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer z-50"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>
                {/* forgot password */}
                <div>
                  <a onClick={handleForgotPassword} className="link link-hover cursor-pointer">Forgot password?</a>
                </div>
                {/* login button */}
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              {formError && <p className="text-red-500 text-xs mt-2 text-center">{formError}</p>}
              {/* google sign in button */}
              <div className="divider">OR</div>
              {/* Google */}
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-[#e5e5e5] w-full"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
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
                Login with Google
              </button>
              {/* register page route */}
              <p className="mt-2 font-medium text-center">
                New in our website?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-800 font-semibold hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
