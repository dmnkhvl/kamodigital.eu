import React from "react";
import Service from "./Service";
import servicesData from "../data/services";

const Services = () => {
  return (
    <div className="bg-kamo-black text-kamo-white">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="max-w-screen-xl mx-auto p-10">
          <div className="flex flex-col md:flex-row gap-16 items-center md:items-start justify-evenly">
            {servicesData.map((service) => (
              <Service
                key={service.id}
                name={service.name}
                description={service.description}
                imgUrl={service.imgUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
