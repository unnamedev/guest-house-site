import React from "react"
import data from "./data";
import {FaAirbnb, FaFacebookF, FaInstagram} from "react-icons/fa";

/**
 * @description ✏️ Footer Component
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () =>
    <footer className="bg-[#52503B] text-white s-padding">
        <div className="grid  gap-6 max-w-[1168px] m-auto w-full mb-[48px] sm:grid-cols-2 md:gap-[16px] md:grid-cols-[auto_auto_minmax(300px,_576px)]">
            <div className="md:col-auto">
                <h3 className="uppercase mb-[11px]">{data.column01.title}</h3>
                <ul className="grid gap-[12px]">
                    {data.column01.list.map((i, idx) => (
                        <li className={idx}>
                            <a href="#">{i}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:col-auto">
                <h3 className="uppercase mb-[11px]">{data.column02.title}</h3>
                <ul className="flex items-center gap-2">
                    <li><a href="#"><FaAirbnb size={25}/></a></li>
                    <li><a href="#"><FaFacebookF size={25}/></a></li>
                    <li><a href="#"><FaInstagram size={25}/></a></li>
                </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
                <h3 className="uppercase mb-[11px]">{data.column03.title}</h3>
                <p className="mb-[10px]">{data.column03.text}</p>
                <form className="relative">
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-white w-full rounded-lg py-[11px] px-[7px]"
                    />
                    <button className="button button--primary rounded-xl absolute p-[5px] right-[7px] top-[50%] translate-y-[-50%] z-10" type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
            <img className="md:max-w-[200px] md:w-full" src="/images/logo.svg" alt=""/>
            <p>© Guest House, LLC. All rights reserved. Powered by Nagoev</p>
            <p>+47 (0) 702 88 12 34 - example@webflow.io - Klubbvika 12, 8310 Kabelvag, Norway</p>
        </div>
    </footer>

export default Footer
