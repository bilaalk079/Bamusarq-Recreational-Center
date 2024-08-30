import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex flex-col scroll-mt-20" id="footer">
      <footer className="text-black bg-gray-800 dark:text-white  top-0  flex-col sm:flex-row flex justify-between">
        <div className="flex flex-col mx-10 mt-9 text-green-300">
          <address className="text-xl sm:text-2xl">
            111, Abule Iroko, Itoki Road, Ogun state, Nigeria.
          </address>
          <p className="text-xl sm:text-2xl">Tel: 08033909524, 08170667703</p>
          <p className="text-xl sm:text-2xl">
            <a href="mailto:bamusarq@yahoo.com">E-mail: bamusarq@yahoo.com</a>
          </p>
          <Image
                src={'/favicon.ico'}
                width={150}
                height={150}
                alt=""
                className="m-5"/>
        </div>
        <div className="sm:flex sm:flex-col gap-1 hidden m-5 md:hidden lg:flex" >
          <h1 className="text-4xl mb-1 mt-2 text-green-400 underline font-sans text-center">Quick Links</h1>
          <Link
            href={"/"}
            className="text-xl font-mono hover:rounded-xl  text-center hover:bg-green-500 hover:p-2"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="text-xl font-mono hover:rounded-xl  text-center hover:bg-green-500 hover:p-2"
          >
            About
          </Link>
          <Link
            href={"/services"}
            className="text-xl font-mono hover:rounded-xl  text-center hover:bg-green-500 hover:p-2"
          >
            Services
          </Link>
          <Link
            href={"/gallery"}
            className="text-xl font-mono hover:rounded-xl  text-center hover:bg-green-500 hover:p-2"
          >
            Gallery
          </Link>
        </div>
        <div className="m-5 mr-36 sm:flex sm:flex-col hidden gap-2 text-center md:hidden lg:flex">
          <h1 className="text-4xl mb-1 mt-2 text-green-400 font-sans underline text-center">Opening Hours</h1>
          <ul className="list-outside font-mono">
            <li className="text-xl">Sunday: 7:30am - 9pm</li>
            <li className="text-xl">Monday: 7:30am - 9pm</li>
            <li className="text-xl">Tuesday: 7:30am - 9pm</li>
            <li className="text-xl">Wednesday: 7:30am - 9pm</li>
            <li className="text-xl">Thursday: 7:30am - 9pm</li>
            <li className="text-xl">Friday: 7:30am - 9pm</li>
            <li className="text-xl">Saturday: 7:30am - 9pm</li>
          </ul>
        </div>
      </footer>
      <div className="bg-slate-100">
        <h1 className="text-center text-2xl">
          Copyright <span className="text-2xl">&copy;</span> {year} 
        </h1>
        <p className="text-center text-xl">All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
