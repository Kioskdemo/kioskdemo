import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <div className="h-[1080px] bg-landimg bg-no-repeat bg-center bg-cover">
        <div className="flex justify-center items-center">
          <div className="font-serif mt-48 ml-8 mr-8">
            <h1 className="text-7xl font-bold text-center m-6">
              Experience ease of doing business with the government
            </h1>
            <h1 className="text-2xl text-center align-baseline">
              Over 50 local government units participating all over the Philippines
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link href={"/menu"}>
            <button className="text-[70px] font-bold text-[#335F96] pt-[20px] mt-[120px]">
              Tap to start !
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
