import React from "react";
import Shoes from "./shoes.jpg";
export default function itemRender() {
  return (
    <div className="flex flex-wrap space-x-2   justify-center ">
      <div className="w-1/5  min-w-[250px] h-auto border-2 rounded-[15px] p-4  ">
        <ul className="space-y-4   ">
          <li>
            <h1>hey</h1>
          </li>
          <li>
            <p>
              heoho shosh osho soh soh so hso hso hso hos hos heos so os hso o
              gds gsg sg sg sf dsf sf dsf dsf dsf sdf fsfssf dsf dsfsf dsf dsfsf
              dsf dsfsf dsf dsfsf dsf dsfsf dsf dsf
            </p>
          </li>
          <li className="w-full  ">
            {" "}
            <img src={Shoes} className="w-full h-full bg-black" alt="" />
          </li>
        </ul>
      </div>
      <div className="w-1/5  min-w-[250px] h-auto border-2 rounded-[15px] p-4">
        <ul className="space-y-4 h-full flex flex-col ">
          <li className="flex-grow">
            <h1>hey</h1>
          </li>
          <li className="flex-grow">
            <p>
              heoho shosh osho soh soh so hso hso hso hos hos heos so os hso o
            </p>
          </li>
          <li className="w-full  ">
            {" "}
            <img
              src={Shoes}
              className="w-full h-full object-left bg-black"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="w-1/5  min-w-[250px] h-auto border-2 rounded-[15px] p-4">
        <ul className="space-y-4 h-full flex flex-col ">
          <li className="flex-grow">
            <h1>hey</h1>
          </li>
          <li className="flex-grow">
            <p>
              heoho shosh osho soh soh so hso hso hso hos hos heos so os hso o
            </p>
          </li>
          <li className="w-full  ">
            {" "}
            <img
              src={Shoes}
              className="w-full h-full object-left bg-black"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="w-1/5  min-w-[250px] h-auto border-2 rounded-[15px] p-4">
        <ul className="space-y-4 h-full flex flex-col ">
          <li className="flex-grow">
            <h1>hey</h1>
          </li>
          <li className="flex-grow">
            <p>
              heoho shosh osho soh soh so hso hso hso hos hos heos so os hso o
            </p>
          </li>
          <li className="w-full  ">
            {" "}
            <img
              src={Shoes}
              className="w-full h-full object-left bg-black"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="w-1/5  min-w-[250px] h-auto border-2 rounded-[15px] p-4">
        <ul className="space-y-4 h-full flex flex-col ">
          <li className="flex-grow">
            <h1>hey</h1>
          </li>
          <li className="flex-grow">
            <p>
              heoho shosh osho soh soh so hso hso hso hos hos heos so os hso o
            </p>
          </li>
          <li className="w-full  ">
            {" "}
            <img
              src={Shoes}
              className="w-full h-full object-left bg-black"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="w-1/5  min-w-[250px] h-auto border-2 rounded-[15px] p-4">
        <ul className="space-y-4 h-full flex flex-col ">
          <li className="flex-grow">
            <h1>hey</h1>
          </li>
          <li className="flex-grow">
            <p>
              heoho shosh osho soh soh so hso hso hso hos hos heos so os hso o
            </p>
          </li>
          <li className="w-full  ">
            {" "}
            <img
              src={Shoes}
              className="w-full h-full object-left bg-black"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
