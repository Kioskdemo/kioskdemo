/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect } from "react";
import { BsTicketDetailed } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineOtherHouses } from "react-icons/md";
import { useRouter } from "next/navigation";
import MenuButton from "../Component/MenuButton";

export default function page() {
  const router = useRouter();

  // useEffect(() => {
  //   const timeLimit = 10000;

  //   const timer = setTimeout(() => {
  //     router.push("/");
  //   }, timeLimit);

  //   return () => clearTimeout(timer);
  // });

  return (
    <div  className="flex flex-col justify-center w-full bgmenu-image mt-[20px] p-20">
        <MenuButton
          link="/queueing"
          iconImg={
            <BsTicketDetailed
                  size={150}
                  className="text-[#1b1b1b]"
                />
          }
          title='Queue Number'
          description='Lorem dolor sit amet'
        />
        <MenuButton
          link="/pay-business"
          iconImg={
            <GiPayMoney
                  size={150}
                  className="text-[#1b1b1b]"
                />
          }
          title='Pay Business'
          description='Lorem dolor sit amet'
        />
        <MenuButton
          link="/pay-property"
          iconImg={
            <BsBuildings
                  size={150}
                  className="text-[#1b1b1b]"
                />
          }
          title='Pay Property'
          description='Lorem dolor sit amet'
        />
        <MenuButton
          link="/other-payments"
          iconImg={
            <MdOutlineOtherHouses
                  size={150}
                  className="text-[#1b1b1b]"
                />
          }
          title='Other Payments'
          description='Lorem dolor sit amet'
        />
    </div>
  );
}
