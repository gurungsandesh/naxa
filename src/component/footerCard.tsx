import React from "react";
import Custombutton from "./customButton";

const FooterCard = () => {
  return (
    <div
      className="w-[80%] m-auto rounded-md min-h-[220px] py-[2.5rem] px-[1rem] 
       footer-card-background relative flex flex-col gap-5 items-center  overflow-hidden "
    >
      <span className="text-3xl font-bold  text-yellow">
        Seeking Collaboration?
      </span>
      <span className="w-[80%] text-center text-sm text-white z-20">
        We constantly look forward to exploring ideas, collaborations, and
        technical innovations. If you want to partner with us, we are just an
        email away.
      </span>
      <div className="z-20">
        <Custombutton label="Let's Talk"></Custombutton>
      </div>
    </div>
  );
};

export default FooterCard;
