import BackButton from "@/app/Component/BackButton";
import LabelStepper from "@/app/Component/PageIndicator";
import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div>
      <LabelStepper stepNum={2} />
      <main className="bgtax-image flex flex-col w-full">
      <BackButton text="back" link={"/pay-business/pay-business-form"} />
        <div className="flex justify-center flex-col text-[40px]">
          <form action="" className="text-[30px] p-8">
            <div className="flex flex-col">
              <label htmlFor="">Paid By</label>
              <input
                size={5}
                name=""
                placeholder="Type here"
                className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Payer Address</label>
              <input
                size={5}
                name=""
                placeholder="Type here"
                className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Particulars</label>
              <input
                size={5}
                name=""
                placeholder="Type here"
                className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="flex justify-center gap-5">
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Particulars</label>
                <input
                  size={5}
                  name=""
                  placeholder="Type here"
                  className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Amount</label>
                <input
                  size={5}
                  name=""
                  placeholder="Type here"
                  className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </form>
          <div className="flex justify-around pt-20 text-white">
            <Link
              href={"/menu"}
              className="bg-[#d3010cee] rounded-2xl py-5 px-16 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
            >
              Cancel
            </Link>
            <Link
              href={"/pay-business/pay-business-form/payment-info/payment-type"}
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
