import React, { useState } from "react";
import RightArrowIcon from "../../../assets/icons/RightArrowIcon";
import DotIcon from "../../../assets/icons/DotIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import airLineLogo from "../../../assets/Vector.png"
import planeLogo from "../../../assets/planeLogo.png"
import locationIcon from "../../../assets/locationIcon.png"
import blueLocationIcon from "../../../assets/blueLocationIcon.png"
import { useWindowSize } from "@uidotdev/usehooks";
import FilterIcon from "../../../assets/FilterIcon";
import FilterDrawer from "../../../components/FilterDrawer/FilterDrawer";

const FlightHistoryContent = () => {
  const size = useWindowSize();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  return (
    <div className="ps-4 pe-4">
      {size?.width <= 1200 ? (
        <>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mb-3 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <FilterIcon />
            <span className="sr-only">Icon description</span>
          </button>
          <FilterDrawer isOpen={isOpen} handleClose={handleClose} />
        </>
      ) : (
        <></>
      )}

      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Booking History
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Flight
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm text-wrap font-medium text-[#1882FF] md:ms-2 dark:text-gray-400">
                STFL17121182045413
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="bg-white rounded-lg">
        <div
          className={
            size?.width <= 420
              ? "p-4 mt-5 flex justify-between items-center border-b border-[#ebf0f5] flex-col"
              : "p-4 mt-5 flex justify-between items-center border-b border-[#ebf0f5]"
          }
        >
          <div className="flex items-center">
            <span className="bg-[#1882FF] text-white ps-3 pe-3 pt-1 pb-1 rounded-full">
              1
            </span>
            <div className="flex">
              <div className="flex flex-col ms-4">
                <div className="flex items-center">
                  <p className="text-lg font-semibold me-1">DAC</p>
                  <RightArrowIcon />
                  <p className="text-lg font-semibold ms-1">JFK</p>
                </div>
                <div className="flex text-[#5A6573] ">
                  <p className="text-sm flex text-nowrap">
                    Round Trip <DotIcon /> <span>25 March - 4 April 2023</span>{" "}
                    <DotIcon /> <span>1 Stop</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              size?.width <= 420 ? "flex justify-start w-full mt-3" : ""
            }
          >
            <p className="text-sm text-[#1882FF] bg-[#E8F3FF] ps-3 pe-3 pb-1 pt-1 rounded-full mt-0 font-medium">
              3h 20m
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <LocationIcon />
            <div
              className={
                size?.width <= 420
                  ? "flex flex-col w-full ms-6 justify-start bg-[#F5F7FA] p-3 rounded-lg"
                  : "w-full ms-6 flex justify-between items-center bg-[#F5F7FA] p-3 rounded-lg"
              }
            >
              <p className="text-center text-[#1A2B3D] font-medium text-sm ms-2">
                Departure from Dhaka
              </p>
              <div className="flex justify-center items-center">
                <p className="text-right font-medium text-sm">Terminal 1:</p>
                <span className="text-[#5A6573] ms-1 font-normal text-sm">
                  Hazrat Shahjalal International{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="ms-4">
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-2">
              <li className="mb-2 ms-8">
                <span className="mt-2 absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img src={airLineLogo} alt="airLines Logo" />
                </span>
                <div className="flex justify-between">
                  <div>
                    <p className="text-nowrap mt-0 flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      DAC - DXB
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-[#5A6573] dark:text-gray-500">
                      12 hr 20 min
                    </time>
                    <p className="font-medium text-[#3E4957] dark:text-gray-400 mt-4">
                      Turkish Airlines
                    </p>
                    <p className="font-normal text-[#5A6573] text-sm">
                      Flight no : TUR467
                    </p>
                  </div>
                  <div>
                    <p className="ms-3 mt-0 flex items-center mb-1 text-lg font-semibold text-[#1A2B3D] dark:text-white">
                      7:30 PM
                    </p>
                    <time className="ms-3 block mb-2 text-sm font-normal leading-none text-[#5A6573] dark:text-gray-500">
                      28 Mar, Friday
                    </time>
                    <p className="ms-3 font-normal text-sm text-[#3E4957] dark:text-gray-400 mt-4">
                      Airbus Industrie 737-800-738
                    </p>
                    <p className="ms-3 font-normal text-[#5A6573] text-sm">
                      Class :{" "}
                      <span className="text-sm font-medium">ECONOMY-Y (O)</span>
                    </p>
                  </div>
                  <div>
                    <p className="mt-0 flex items-center mb-1 text-lg font-semibold text-[#1A2B3D] dark:text-white">
                      8:50 AM
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-[#5A6573] dark:text-gray-500">
                      29 Mar, Saturday
                    </time>
                  </div>
                </div>
              </li>
              <li className="ms-8">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img src={planeLogo} alt="planeLogo" />
                </span>
                <div
                  className="mt-6 flex items-center p-4 mb-4 text-xs text-[#3E4957] rounded-lg bg-[#FFEEDB] dark:bg-gray-800 dark:text-yellow-300 border border-[#FFE1C2]"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#F27D00"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    Technical stoppage at Malpensa International Airport
                    (Milano). Before booking this flight please check your visa
                    requirements as per your nationality
                  </div>
                </div>
              </li>
              <li className="ms-8">
                <span className="mt-3 absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img src={locationIcon} alt="location icon" />
                </span>
                <div className="mt-8">
                  <div className="flex items-center">
                    <div
                      className={
                        size?.width <= 420
                          ? "w-full flex flex-col justify-between items-center bg-[#E8F3FF] p-3 rounded-lg"
                          : "w-full flex justify-between items-center bg-[#E8F3FF] p-3 rounded-lg"
                      }
                    >
                      <p className="text-center text-[#1A2B3D] font-medium text-sm ms-2">
                        Layover at Dubai: 12 hr 20 min
                      </p>
                      <div className="flex justify-center items-center">
                        <span className="text-[#5A6573] ms-1 font-normal text-sm">
                          Dubai International Airport
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>

            <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-4">
              <li className="mb-2 ms-8">
                <span className="mt-2 absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img src={airLineLogo} alt="airLines Logo" />
                </span>
                <div className="flex justify-between">
                  <div>
                    <p className="mt-0 flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      DAC - DXB
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-[#5A6573] dark:text-gray-500">
                      12 hr 20 min
                    </time>
                  </div>
                  <div>
                    <p className="mt-0 flex items-center mb-1 text-lg font-semibold text-[#1A2B3D] dark:text-white">
                      7:30 PM
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-[#5A6573] dark:text-gray-500">
                      28 Mar, Friday
                    </time>
                  </div>
                  <div>
                    <p className="mt-0 flex items-center mb-1 text-lg font-semibold text-[#1A2B3D] dark:text-white">
                      8:50 AM
                    </p>
                    <time className="block mb-2 text-sm font-normal leading-none text-[#5A6573] dark:text-gray-500">
                      29 Mar, Saturday
                    </time>
                  </div>
                </div>
              </li>
              <li className="ms-8">
                <span className="mt-2 absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 mb-4">
                  <img src={planeLogo} alt="planeLogo" />
                </span>
                <div className="flex justify-between ">
                  <div>
                    <p className="font-medium text-[#3E4957] dark:text-gray-400 mt-1">
                      Turkish Airlines
                    </p>
                    <p className="font-normal text-[#5A6573] text-sm">
                      Flight no : TUR467
                    </p>
                  </div>
                  <div className="mr-10">
                    <p className="font-normal text-sm text-[#3E4957] dark:text-gray-400 mt-1">
                      Airbus Industrie 737-800-738
                    </p>
                    <p className="font-normal text-[#5A6573] text-sm">
                      Class :{" "}
                      <span className="text-sm font-medium">ECONOMY-Y (O)</span>
                    </p>
                  </div>
                  <div></div>
                </div>
              </li>
              <li className="ms-8">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img src={blueLocationIcon} alt="location icon" />
                </span>
                <div className="">
                  <div className="flex items-center mt-5">
                    <div
                      className={
                        size?.width <= 420
                          ? "w-full flex flex-col text-nowrap bg-[#f5f7fa] p-3 rounded-lg"
                          : "w-full flex justify-between items-center bg-[#f5f7fa] p-3 rounded-lg"
                      }
                    >
                      <p className="text-center text-[#1A2B3D] font-medium text-sm ms-2">
                        Destination at New York
                      </p>
                      <div className="flex justify-center items-center">
                        <p className="text-right font-medium text-sm">
                          Terminal 4:
                        </p>
                        <span className="text-[#5A6573] ms-1 font-normal text-sm ">
                          John F Kennedy International Airport
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightHistoryContent;
