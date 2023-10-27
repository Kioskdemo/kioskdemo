/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import BackButton from "@/app/Component/BackButton";
import LabelStepper from "@/app/Component/PageIndicator";
import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div>
      <LabelStepper stepNum={1} />
      <main className="bgtax-image flex flex-col w-full ">
      <BackButton text="back" link={"/pay-business"} />
        <div className="flex justify-center flex-col text-[25px]">
          <form action="" className="text-[30px] p-8">
            <div className="flex justify-center gap-5">
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">BIN</label>
                <input
                  size={5}
                  name=""
                  placeholder="Type here"
                  className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Type</label>
                <input
                  size={5}
                  name=""
                  placeholder="Type here"
                  className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Trade Name</label>
              <input
                size={5}
                name=""
                placeholder="Type here"
                className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="flex justify-center gap-5">
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Amount Due</label>
                <input
                  size={5}
                  name=""
                  placeholder="Type here"
                  className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Year</label>
                <input
                  size={5}
                  name=""
                  placeholder="Type here"
                  className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Quarter</label>
                <input
                  size={5}
                  name=""
                  placeholder="Type here"
                  className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </form>
          {/* <div className="relative text-[30px] text-black flex justify-around bg-[#ffffff75]">
            <div className="absolute w-[700px] h-[3px] bg-black top-[50px]"></div>
            <div className="">
              <h1>Details</h1>
              <p>Sari-Sari Store</p>
              <p className="pl-[50px]">Business Tax</p>
              <p className="pl-[50px]">Mayor's Permit</p>
              <p>Sari-Sari Store</p>
              <p className="pl-[50px]">Business Tax</p>
              <p className="pl-[50px]">Mayor's Permit</p>
            </div>
            <div>
              <h1>Amount</h1>
              <p className="text-transparent">.</p>
              <p>1,500.00</p>
              <p>800.00</p>
              <p className="text-transparent">.</p>
              <p>1,500.00</p>
              <p>800.00</p>
            </div>
          </div> */}
          <div className="flex justify-around pt-10  text-white">
            <Link
              href={"/menu"}
              className="bg-[#d3010cee] rounded-2xl py-5 px-16 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              Cancel
            </Link>
            <Link
              href={"/pay-business/pay-business-form/payment-info"}
              className="bg-[#335F96] rounded-2xl py-5 px-16 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              Confirm
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
