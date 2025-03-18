import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    try {
      const response = await axios.post("https://test.ezworks.ai/api", {
        email,
      });
      if (response.status === 200) {
        setMessage("Form Submitted");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError("Emails ending with @ez.works are not allowed.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg flex flex-col md:flex-row items-center gap-3 mt-4 text-left"
    >
      <input
        type="email"
        placeholder="Email Address"
        className="px-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 w-full md:w-[280px] h-[45px] text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="px-7 py-2 bg-[#EA7B2C] hover:bg-orange-600 text-white text-lg rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg whitespace-nowrap w-50% md:w-auto">
        Contact Me
      </button>

      <div className="w-full text-center mt-2">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {message && <p className="text-green-500 text-sm">{message}</p>}
      </div>
    </form>
  );
};

export default Form;
