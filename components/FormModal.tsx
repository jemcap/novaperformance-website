"use client";

import { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  email: string;
  mobile: number | string;
};

const formStyles =
  "shadow appearance-none border rounded w-full py-3 px-8 text-gray-700 leading-tight text-lg lg:text-2xl focus:outline-none focus:shadow-outline";

const labelStyles = "block text-gray-700 text-lg lg:text-3xl font-bold mb-2";

const FormModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submission (consultation inquiry)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/send-consultation-inquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent!");
      } else {
        setResponseMessage(`An error occured. ${data.message}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
        <div className="modal-box w-11/12 max-w-5xl">
          <div>
            <div className="text-nova-charcoal text-center">
              <h1 className="text-4xl font-bold">
                Fill out the form below to get started,
              </h1>
              <p className="text-3xl ">
                And we will contact you as soon as possible!
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white h-full min-w-96 rounded px-8 pt-8 pb-8 mb-4"
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
                <label htmlFor="mobile" className={labelStyles}>
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className={formStyles}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="text-white text-2xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
              {responseMessage && (
                <p className="text-nova-charcoal text-center text-2xl">
                  {responseMessage}
                </p>
              )}

              <div className="modal-action">
                <button className="btn text-2xl" onClick={onClose}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormModal;
