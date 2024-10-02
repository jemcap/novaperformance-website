"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import NovaLogo from "@/public/WhiteNP.png";
import { NAV_LINKS } from "@/constants/links";
import { useState } from "react";
import FormModal from "./FormModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <nav className=" bg-nova-charcoal flex  relative z-30 py-1">
      <div className="navbar align-elements">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <FaBarsStaggered size={24} />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {NAV_LINKS.map((link) => {
                const { id, url, text } = link;
                return (
                  <Link
                    href={url}
                    key={id}
                    className="regular-16 text-gray-800 flex justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    {text}
                  </Link>
                );
              })}
            </ul>
          </div>

          <Link href="/">
            <Image
              src={NovaLogo}
              alt="Nova Performance"
              width={175}
              height={175}
            />
          </Link>
        </div>
        <div className="navbar-center hidden h-full gap-12 lg:flex z-10">
          <ul className="menu menu-horizontal px-1 text-white gap-4 z-10">
            {NAV_LINKS.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link
                    href={url}
                    className="text-xl text-gray-50 active:text-red-500 focus:text-red-500 flex justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={openModal}
            className="btn btn-xs lg:btn-sm text-xs lg:text-lg"
          >
            Book a consultation
          </button>
        </div>
      </div>
      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Header;
