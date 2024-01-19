"use client"

import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "../../atoms/Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* logo */}
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
        />
      </Link>
      {/* links */}
      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray flexCenter cursor-pointer"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {/* button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      {/* menu */}
      <div
        className="inline-block cursor-pointer lg:hidden z-50"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <GrClose size={32} />
        ) : (
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        )}
      </div>
      {/* menu list */}
      <ul
        className={`${toggle ? 'flex' : 'hidden'} flex-col justify-center items-center h-screen gap-12 lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-2`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray flexCenter cursor-pointer"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
