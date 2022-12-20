import React from "react";
import { CgWebsite } from "react-icons/cg";

const Service = ({ imgUrl, name, description}) => {
  return (
    <div className="md:mb-0 p-10 bg-white shadow-sm md:shadow-xl rounded-3xl max-w-xs">
      <div className="flex justify-center md:justify-start mb-2">
        <div className="flex justify-center items-center mx-auto md:mx-0 bg-kamo-green h-[50px] w-[50px] rounded-xl bg-opacity-25 mb-2">
          <CgWebsite size={30} className="text-kamo-green" />
        </div>
      </div>
      <div className="max-w-xs mx-auto" >
      <h2 className="font-semibold text-kamo-black text-center md:text-left text-3xl mb-4">{name}</h2>
      <p className="text-center md:text-left text-kamo-gray-alt" >{description}</p>
      </div>
    </div>
  );
};

export default Service;
