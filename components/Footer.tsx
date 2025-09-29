import Link from "next/link";
import React from "react";
import { AiFillHome, AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { TiPhone } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="width">
        <div className="flex flex-col items-center justify-center lg:items-start gap-11 sm:flex-row flex-wrap lg:justify-between mb-20 text-center lg:text-start">
          <div className="self-center">
            <p className="text-3xl font-extrabold">COGCC</p>
          </div>
          <div className="w-full lg:w-fit">
            <p className="text-sm lg:text-[16px] mb-5 font-bold tracking-wider text-gray-400 uppercase">
              Week Days
            </p>
            <ul className="flex flex-col gap-5 font-semibold flex-1 tracking-wider text-sm lg:text-[16px]">
              <li className="text-white">Sundays @ 8am, 10am, 12pm,</li>
              <li className="text-white">Tuesdays @ 6:00pm</li>
              <li className="text-white">Thursdays @ 5:30pm</li>
            </ul>
          </div>
          <div className="w-full lg:w-fit">
            <p className="text-sm lg:text-[16px] mb-5 font-bold tracking-wider text-gray-400 uppercase">
              Quick Links
            </p>
            <ul className="flex flex-col gap-5 font-semibold flex-1 tracking-wider text-sm lg:text-[16px]">
              <li className="group">
                <Link
                  href="/about"
                  className="hover:text-gray-100/60 duration-300 transition ease-in-out"
                >
                  Pastor E. Iren
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/"
                  className="hover:text-gray-100/60 duration-300 transition ease-in-out"
                >
                  Who we are
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/"
                  className="hover:text-gray-100/60 duration-300 transition ease-in-out"
                >
                  Branches
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/"
                  className="hover:text-gray-100/60 duration-300 transition ease-in-out"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center">
            <p className="text-sm lg:text-[16px] mb-5 font-bold tracking-wider text-gray-400 uppercase">
              Contact us
            </p>
            <div className="flex items-center gap-1">
              <AiFillHome className="size-7" />
              <p>1234 Faith Avenue, City, State, ZIP</p>
            </div>
            <div className="flex items-center gap-1 my-4">
              <IoMailOutline className="size-7" />
              <p> info@hotrportharcourt.com</p>
            </div>
            <div className="flex items-center gap-1">
              <TiPhone className="size-7" />
              <p>+2348091118422</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-5 lg:justify-between items-center ">
          <small className="text-gray-300 tracking-wider text-center lg:text-start">
            © Copyright 2025 City of God Covenant Church. All Rights Reserved.
          </small>
          <div className="flex items-center gap-4">
            <Link href="/">
              <AiOutlineInstagram className="size-7" />
            </Link>
            <Link href="/">
              <MdOutlineFacebook className="size-7" />
            </Link>
            <Link href="/">
              <FaXTwitter className="size-7" />
            </Link>
            <Link href="/">
              <FaYoutube className="size-7" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
