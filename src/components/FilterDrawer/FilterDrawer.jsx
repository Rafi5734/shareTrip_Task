import React from 'react';
import { Accordion, Button, Drawer } from "flowbite-react";

const FilterDrawer = ({isOpen, handleClose}) => {
    return (
      <div>
        <Drawer open={isOpen} onClose={handleClose}>
          <Drawer.Header title="Filter Trip" />
          <Drawer.Items>
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>Price Range</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Starts from ৳ 11,673 - ৳ 11,673 against your search. Price
                    is a subject to change.
                  </p>

                  <input
                    id="default-range"
                    type="range"
                    value="00"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />

                  <p className="text-center mt-3">BDT 11,673 - BDT 11,673</p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion className="mt-3">
              <Accordion.Panel>
                <Accordion.Title>Airlines</Accordion.Title>
                <Accordion.Content>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        NOVOAIR
                      </label>
                    </div>

                    <p className="text-[#77818c]">৳ 11,673</p>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion className="mt-3">
              <Accordion.Panel>
                <Accordion.Title>Refundability</Accordion.Title>
                <Accordion.Content>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <input
                        id="default-checkbox2"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-checkbox2"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Non Refundable
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <input
                        id="default-checkbox22"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-checkbox22"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Partially Refundable
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <input
                        id="default-checkbox222"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-checkbox222"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Rules Wise
                      </label>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion className="mt-3">
              <Accordion.Panel>
                <Accordion.Title>Number of Stops</Accordion.Title>
                <Accordion.Content>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <input
                        id="default-checkbox2222"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-checkbox2222"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Direct Flight
                      </label>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </Drawer.Items>
        </Drawer>
      </div>
    );
};

export default FilterDrawer;
