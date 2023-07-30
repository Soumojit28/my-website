import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Oxytocin() {
  const tasks = [
    {
      text: "Developed and executed scalable backend solutions for Web3 applications, significantly improving overall performance and enhancing user satisfaction.",
      keywords: ["performance", "satisfaction", "Web3 applications", "scalable"],
    },
    {
      text: "Implemented a scalable Azure DevOps solution, automating deployment processes, resulting in enhanced performance and cost reduction.",
      keywords: ["performance", "cost reduction"],
    },
    {
      text: "Created robust backends for Web3 staking, marketplace, and gaming platforms, ensuring seamless operations and optimal user experiences.",
      keywords: ["staking", "marketplace", "gaming platforms"],
    },
    {
      text: "Designed and constructed a discord bot with web3 integrations, effectively managing user roles and enhancing community engagement.",
      keywords: ["discord bot", "web3"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Lead Web3 Backend Developer <span className="text-AAsecondary">@ Oxytocin</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Dec 2021 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.0xytocin.com/", "_blank")}
          >
            www.0xytocin.com
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
