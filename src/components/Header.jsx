import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-b from-kamo-gray-alt via-kamo-black-alt to-kamo-black ">
      <div className="flex items-center justify-center max-w-screen-lg h-[28rem] md:h-[35rem] mx-auto mt-10 md:mt-20">
        <div className="py-5 px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-6 ">
            Hello👋 my sme{" "}
            <span className="text-kamo-green hover:text-kamo-green-alt">
              kamo
            </span>
            .<br /> vaša digitálna agentúra.
          </h1>
          <div className="max-w-screen-md mx-auto mb-6 lg:mb-10">
            <p className="text-kamo-gray px-6 md:px-0 text-lg md:text-xl lg:text-3xl ">
              Sme pripravení
              <span className="text-kamo-white "> spoznať Váš príbeh</span> a
              efektívne ho{" "}
              <span className="text-kamo-white ">
                prezentovať Vaším klientom
              </span>
              .
            </p>
          </div>
          <div className="">
            <Button
              size="sm"
              text="Kontaktuje Nás"
              py="2"
              color="black"
              bg="green"
              font="semibold"
              link="mailto:info@kamodigital.eu"
              mr="4"
            />

            <a
              className="hidden sm:inline-block py-2 px-6 rounded-full border  border-slate-50/[0.06] lg:text-xl text-white hover:bg-kamo-black-alt"
              href=""
            >
              Prvé Stretnutie Zadarmo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
