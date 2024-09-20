import Link from "next/link";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import NovaLogo from "@/public/WhiteNP.png";
import { NAV_LINKS } from "@/constants/links";

const Header = () => {
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
              className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
        <div className="navbar-center hidden h-full gap-12 lg:flex">
          <ul className="menu menu-horizontal px-1 text-white gap-4">
            {NAV_LINKS.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link
                    href={url}
                    className=" text-xl text-gray-50 flex justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn">Book a consultation</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
