import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <div className="align-elements h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="align-elements flex flex-col justify-center items-center">
        <div>
          <h1 className="text-5xl text-center lg:text-left lg:text-8xl mb-8">
            Contact Us
          </h1>
        </div>
        <div className="flex gap-8 flex-col text-center lg:text-start lg:flex-row justify-center items-center">
          <div>
            <ContactForm />
          </div>
          <aside className="text-3xl flex flex-col gap-8">
            <h1>...Or</h1>
            <h1 className="text-red-500 text-4xl lg:text-7xl">VISIT US</h1>
            <p className="max-w-96">
              <a
                href="https://maps.app.goo.gl/NQBXJnvYF2wQ6YDv5"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Unit 8-9, Enfield Court Nuffield Road St Ives Cambridgeshire
                PE27 3NJ
              </a>
            </p>
            <p>+447845 718581</p>
          </aside>
        </div>
        <div>
          <h1>Stay updated with Nova Performance on Instagram</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
