import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900 px-6 py-12 lg:px-10 lg:py-16">
      <div className="container max-w-6xl flex flex-col justify-center items-center gap-10 md:gap-12">
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-8 text-center lg:text-left">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center text-center lg:text-left">
          <ContactForm />
          <aside className="text-lg md:text-xl lg:text-3xl flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">...Or</h1>
            <h1 className="text-red-500 text-6xl md:text-7xl lg:text-8xl">
              VISIT US
            </h1>
            <p className="max-w-xs md:max-w-sm lg:max-w-md leading-relaxed text-3xl md:text-4xl lg:text-5xl">
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
            <p className="text-3xl md:text-4xl lg:text-5xl">+447845 718581</p>
          </aside>
        </div>
        <div className="flex flex-col justify-center items-center py-4 md:py-5">
          <h1 className="text-lg md:text-xl lg:text-3xl mb-4">
            Stay updated with Nova Performance on Instagram
          </h1>
          <Link href={`https://www.instagram.com/`} target="_blank">
            <FaInstagram className="text-3xl md:text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
