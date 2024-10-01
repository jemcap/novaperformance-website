"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const formStyles =
    "shadow appearance-none border rounded w-full py-3 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  const labelStyles = "block text-gray-700 text-lg lg:text-3xl font-bold mb-2";

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent!");
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md h-full min-w-96 rounded px-8 pt-8 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="name" className={labelStyles}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={formStyles}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className={labelStyles}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={formStyles}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className={labelStyles}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={formStyles}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {responseMessage && (
          <p className="text-nova-charcoal">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
