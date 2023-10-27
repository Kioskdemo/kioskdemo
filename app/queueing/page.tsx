/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useRef } from "react";
import ReactDOMServer, {
  renderToStaticMarkup,
  renderToString,
} from "react-dom/server";
import CategoryQue from "../Component/CategoryQue";
import { BsFillBuildingFill, BsFillPersonFill, BsWater } from "react-icons/bs";
import { AiFillHome, AiFillStop, AiFillCar } from "react-icons/ai";
import { GiHealthNormal } from "react-icons/gi";
import { IoTicket } from "react-icons/io5";
import { FaHelmetSafety } from "react-icons/fa6";
import { ComponentToPrint } from "../Component/PrintableContent";
import BackButton from "../Component/BackButton";



const LandingPage = () => {
  return (
    <>
      <img className="hidden" src="/Qr.png" alt="" />
      <div className="bg-queueimg bg-no-repeat bg-cover">
        <div className="">
          <BackButton text="Back" />
        </div>
        <div className="text-[45px] font-bold px-28 pt-5 relative grid grid-rows-3 grid-flow-col gap-5">
          <CategoryQue
            iconImg={<BsFillPersonFill size={50} />}
            text={"Cedula"}
          />
          <CategoryQue iconImg={<BsWater size={50} />} text={"Water"} />
          <CategoryQue
            iconImg={<BsFillBuildingFill size={50} />}
            text={"Construction Permit"}
          />
          <CategoryQue iconImg={<AiFillHome size={50} />} text={"Real Property"} />
          <CategoryQue iconImg={<AiFillStop size={50} />} text={"Ordinance Violations"} />
          <CategoryQue iconImg={<AiFillCar size={50} />} text={"Vehicle Registrtion"} />
          <CategoryQue iconImg={<GiHealthNormal size={50} />} text={"Health Permit"} />
          <CategoryQue iconImg={<IoTicket size={50} />} text={"Queue"} />
          <CategoryQue iconImg={<FaHelmetSafety size={50} />} text={"Work Permit"} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;

//////////print
{
  /* <div className="capitalize text-center mt-[60rem]">
            <Link href={"/menu"}>
              <button
                onClick={handlePopupPrint}
                className="text-[70px] font-bold text-white bg-[#31D84C] rounded-2xl px-40 py-5 shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
              >
                Print
              </button>
            </Link>
          </div> */
}
///////////dropdown
{
  /* 

  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );
  
  const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];
  
  <li className="bg-[#335F96] shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl relative m-[40px] p-[30px] ">
                  <Select
                    options={options}
                    value={value}
                    onChange={(o) => setValue(o)}
                  />
                </li> */
}
