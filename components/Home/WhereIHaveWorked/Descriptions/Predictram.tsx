import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Predictram() {
  const tasks = [
    {
      text: "Developed and implemented integration code in the frontend to establish seamless communication with smart contracts for a SAAS application.",
      keywords: ["smart contracts", "SAAS application"],
    },
    {
      text: "Automated the extraction of stock and market-related data from various websites through the creation and execution of Python scripts.",
      keywords: ["stock", "market-related", "Python"],
    },
    {
      text: "Employed innovative techniques to streamline the process and ensure the automatic retrieval of relevant information.",
      keywords: ["automatic"],
    }
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Backend Developer <span className="text-AAsecondary">@ Predictram</span>
          </span>
          {/* Date */}
          {/* <span className="font-mono text-xs text-gray-500">Dec 2021 - Present</span> */}
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.cdac.in/", "_blank")}
          >
           www.cdac.in
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
