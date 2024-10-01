import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="h-full md:h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900 px-9 py-9 lg:px-10">
      <div className="flex flex-col justify-center items-center gap-12">
        <div>
          <h1 className="text-5xl lg:text-8xl mb-8 text-center lg:text-left">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center text-center lg:text-left">
          <ContactForm />
          <aside className="text-xl lg:text-3xl flex flex-col gap-6 lg:gap-8 items-center lg:items-start">
            <h1>...Or</h1>
            <h1 className="text-red-500 text-4xl lg:text-7xl">VISIT US</h1>
            <p className="max-w-96 leading-relaxed">
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
        <div className="flex flex-col justify-center items-center py-5">
          <h1 className="text-xl lg:text-3xl">
            Stay updated with Nova Performance on Instagram
          </h1>
          <Link href={`https://www.instagram.com/`} target="_blank">
            <FaInstagram className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
