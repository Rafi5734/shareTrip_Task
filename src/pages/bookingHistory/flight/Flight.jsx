import React, { useEffect, useState } from "react";
import SideMenuBar from "./sideMenuBar/SideMenuBar";
import FlightHistoryContent from "../flightHistoryContent/FlightHistoryContent";
import { useWindowSize } from "@uidotdev/usehooks";

const Flight = () => {
const size = useWindowSize();

  return (
    <div className="container mx-auto pt-4 pb-4">
      <div className="flex flex-row">
        <div className={size?.width <= 1200 ? "hidden" : "w-1/3"}>
          <div className="bg-white rounded-lg">
            <SideMenuBar />
          </div>
        </div>
        <div className={size?.width > 1200 ? "w-2/3 ms-6" : "w-full"}>
          <div className="">
            <FlightHistoryContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
