import React, { FC } from "react";
import Image from "next/image";
import {
  PhoneIcon,
  CalendarIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Header: FC = () => {
  return (
    <div
      className={
        "relative flex items-center justify-between bg-red-500 bg-white px-10 py-5"
      }>
      {/*Logo with call us*/}
      <div className={"flex items-center space-x-5 lg:space-x-9"}>
        {/*Menu Bar Mobile*/}
        <button className={"lg:hidden"}>
          <Bars3Icon className={"h-6 w-6"} />
        </button>
        <Image src={"/logo.png"} alt={"Logo App"} width={191} height={35} />
        <div className={"hidden items-center space-x-2 lg:flex"}>
          <PhoneIcon className={"h-5 w-5 text-gray-400"} />
          <label className={"text-sm font-medium"}>
            Call Us - (+22) 123 456 7890
          </label>
        </div>
      </div>

      {/*Menu Item*/}
      <div className={"items-center space-x-10 p-5 lg:flex "}>
        <ul
          className={
            "hidden flex-col space-y-5 lg:flex lg:flex-row lg:space-y-0 lg:space-x-10"
          }>
          <li>Home</li>
          <li>Pages</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <button
          className={
            "block flex items-center bg-gray-400 px-8 py-3 text-sm text-white hover:bg-gray-500 lg:space-x-3"
          }>
          <CalendarIcon className={"h-5 w-5 text-white"} />
          <span className={"font-medium"}>RESERVATION</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
