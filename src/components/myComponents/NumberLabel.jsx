import React from "react";

const numberLabel = ({ itemNum }) => {
  return (
    <div>
      <div className="text-white bg-neutral-400 rounded-full h-5 w-5 text-center text-[10px] flex items-center justify-center font-semibold pr-[1px]">
        {itemNum}
      </div>
    </div>
  );
};

export default numberLabel;
