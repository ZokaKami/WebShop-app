import React from "react";

const QuantityButton = ({ quantUp, quantDown, quantity }) => {
  return (
    <div className="flex ml-2 items-center">
      <button
        onClick={quantUp}
        className="border-2 w-[30px] bg-gray-200 active:bg-gray-600 rounded-l-lg"
      >
        +
      </button>
      <span className="mx-2">{quantity}</span>
      <button
        onClick={quantDown}
        className="border-2 w-[30px] bg-gray-200 active:bg-gray-600 rounded-r-lg"
      >
        -
      </button>
    </div>
  );
};

export default QuantityButton;
