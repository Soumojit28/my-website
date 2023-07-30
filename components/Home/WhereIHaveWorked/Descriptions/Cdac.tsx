import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Cdac() {
  const tasks = [
    {
      text: "Developed a state-of-the-art Air Quality Monitoring system by integrating multiple sensors to precisely measure various air parameters, including gas composition, humidity, temperature, and particle levels, enabling real-time assessment of air quality.",
      keywords: ["sensors", "parameters", "real-time"],
    },
    {
      text: "Designed a customized PCB (Printed Circuit Board) for the air quality monitoring device, incorporating crucial features such as efficient power management and battery backup to ensure uninterrupted functionality.",
      keywords: ["power management"],
    },
    {
      text: "Implemented advanced techniques to optimize power consumption, resulting in a significantly extended battery life for prolonged monitoring periods.",
      keywords: ["power consumption", "extended battery life"],
    },
    {
      text: "Established docker-based servers to efficiently collect data from endnodes and utilized timeseries database for seamless data storage.",
      keywords: ["docker-based", "timeseries"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Intern <span className="text-AAsecondary">@ Centre for Development of Advanced Computing</span>
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
