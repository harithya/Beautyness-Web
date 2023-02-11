import React, {FC} from 'react';
import Image from "next/image";

const Header: FC = () => {
    return (
        <div className={"px-10 py-5 bg-white flex items-center justify-between"}>
          <div className={"flex items-center space-x-9 "}>
              <Image src={'/logo.png'} alt={"Logo App"} width={191} height={35}/>
              <div>
                  <label className={"text-sm font-medium"}>Call Us - (+22) 123 456 7890</label>
              </div>
          </div>
            <ul className={"flex flex-row space-x-10"}>
                <li>Home</li>
                <li>Pages</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Header;
