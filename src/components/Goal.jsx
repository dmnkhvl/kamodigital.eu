import React from "react";

function Goal() {
  return (
    <div className="bg-kamo-black text-kamo-white">
      <div className="max-w-screen-2xl mx-auto text-center flex items-center">
        <div className="mx-auto p-20">
          <h1 className="font-bold text-5xl">Náš cieľ je jasný</h1>
          <p className="text-xl font-extralight mt-6 max-w-xl">
            Aby Vaša značka získala výsledky a uznanie, ktoré si zaslúži - čo
            najrýchlejšie a najprofitabilnejšie
          </p>
          <button className="mt-6 font-semibold text-xl bg-kamo-green hover:bg-kamo-green-alt text-kamo-black px-10 py-2 rounded-full transition-colors duration-200">
            POĎME DO TOHO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Goal;
