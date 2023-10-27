import { link } from "fs";
import Link from "next/link";
import React, { ReactNode, useRef } from "react";
import { ComponentToPrint } from "./PrintableContent";
import ReactDOMServer from "react-dom/server";

interface CategoryQueProps {
  iconImg: ReactNode;
  text: string;
}

const CategoryQue: React.FC<CategoryQueProps> = ({ iconImg, text }) => {
  const componentRef = useRef(null);
  const handlePopupPrint = () => {
    const printWindow = window.open("", "", "width=1,height=1");

    if (printWindow) {
      const content = (
        <div>
          <ComponentToPrint />
        </div>
      );
      const customStyle = `
        body {font-size: 12px;}
        img {
          height: 100px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        @media print {
          .no-print {display: none;}
          @page {
            size: auto;
            margin: 0;
          }
          @page :first {margin-top: 0;}
          @page :left {margin-left: 0px;}
          @page :right {margin-right: 0;}
        }
      `;
      printWindow.document.write(`
        <html>
        <head>
          <style>${customStyle}</style>
        </head>
        <body>
        <img src="/Qr.png" alt="" />
          ${ReactDOMServer.renderToString(content)}
        </body>
        </html>
      `);
      printWindow.document.querySelectorAll(".no-print").forEach((element) => {
        element.classList.add("hidden-on-print");
      });
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    } else {
      alert("Pop-up window blocked. Please allow pop-ups for printing.");
    }
  };

  return (
    <>
      <Link href={"/queueing"}>
        <button
          onClick={handlePopupPrint}
          className="w-[180px] h-[180px] bg-white rounded-[25%] text-[#335F96] shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)] 
      border border-[#335F96] flex justify-center items-center text-center"
        >
          <div className="flex items-center flex-col p-5 gap-3 ">
            <div className="">{iconImg}</div>
            <span className="text-[17px] text-black">{text}</span>
          </div>
        </button>
      </Link>
    </>
  );
};

export default CategoryQue;
