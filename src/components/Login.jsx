import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!SignInForm);
  };
  return (
    <div>
      <Header />

      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_medium.jpg"
          alt="background"
          className="w-full h-screen object-cover"
        />

        <form className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/12 p-6 bg-black/70 text-amber-50 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">
            {SignInForm ? "Sign In" : "Sign up"}
          </h1>
          <input
            className="bg-gray-700 p-3 mb-4 w-full rounded"
            type="text"
            placeholder="Email address"
          />{" "}
          {!SignInForm && (
            <input
              className="bg-gray-700 p-3 mb-4 w-full rounded"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            className="bg-gray-700 p-3 mb-4 w-full rounded"
            type="password"
            placeholder="Password"
          />
          <button className="p-3 bg-red-700 w-full rounded-lg">
            {SignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className="p-3 mb-4 cursor-pointer" onClick={toggleSignInForm}>
            {SignInForm
              ? " New to Netflix?Sign Up Now"
              : "Already Sign up ?Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
