import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <div className="h-screen w-full ">
      <div className="align-elements flex flex-col justify-center items-center">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
