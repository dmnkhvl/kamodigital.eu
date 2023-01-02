import React from "react";
import Button from "./Button";

function Goal() {
  return (
    <div className="bg-kamo-black text-kamo-white">
      <div className="max-w-screen-2xl mx-auto text-center flex items-center">
        <div className="mx-auto p-20">
          <h1 className="font-bold text-4xl md:text-5xl">Náš cieľ je jasný</h1>
          <p className="text-lg font-normal text-kamo-gray mt-6 max-w-xl">
            Aby Vaša značka získala výsledky a uznanie, ktoré si zaslúži - čo
            najrýchlejšie a najprofitabilnejšie
          </p>
          <Button
            size="sm"
            text="poďme na to"
            py="2"
            color="black"
            bg="green"
            font="semibold"
            link="mailto:info@kamodigital.eu"
            mr="4"
            special="mt-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Goal;
