import { border } from "@/style/color";
import Image from "next/image";
import React, { useState } from "react";

export default function Accordion({
  titles,
  children,
}: {
  titles: string[];
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccodion = () => {
    setIsOpen(!isOpen);
  };
  const [accodion, setAccodion] = useState(titles[0]);
  return (
    <>
      {titles.map((title) => (
        <div key={title}>
          <button
            onClick={() => toggleAccodion()}
            // onClick={() => setAccodion(title)}
            style={{ borderBottom: `solid 1px ${border}` }}
            className=" w-full h-20 flex items-center justify-between  px-4 "
          >
            <span style={{ fontSize: "14px" }}>{title}</span>
            <Image
              src="images/Accodion.svg"
              alt="矢印"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "16px",
                height: "16px",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",

                transition: ".3s ease",
              }}
            />
          </button>
          <div
            style={{
              height: isOpen ? "auto" : 0,
              transition: ".1s ease-in-out",
              overflow: "hidden",
              background: "#F1F5F9",
              boxSizing: "content-box",
              padding: isOpen ? "8px 0 " : 0,
            }}
            className="flex items-center justify-center gap-2 "
          >
            {children}
          </div>
        </div>
      ))}
    </>
  );
}
