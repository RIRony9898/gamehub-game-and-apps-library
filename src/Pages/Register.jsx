import React from "react";
import Container from "../Components/Container";
import { Link } from "react-router";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value
    console.log({name, email, password, confirmPassword})
  };
  return (
    <div>
      <Container>
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold mx-auto">Register now!</h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
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
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                {/* confirm password */}
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="input"
                  placeholder="Confirm Password"
                />
                {/* register button */}
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {/* login page route */}
              <p className="mt-2 font-medium">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-500 hover:text-blue-800 font-semibold hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
