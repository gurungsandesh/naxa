import { useRef } from "react";

const HamburgerNavbar = () => {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const onhandleClickHamburger = () => {
    hamburgerRef.current!.children[0].classList.toggle("animate-rotatetop");
    hamburgerRef.current!.children[1].classList.toggle("opacity-0");
    hamburgerRef.current!.children[2].classList.toggle("animate-rotatebottom");
    drawerRef.current!.classList.toggle("animate-drawerSlide");
  };

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-1 cursor-pointer group absolute top-4 z-10  "
        onClick={() => onhandleClickHamburger()}
        ref={hamburgerRef}
      >
        <div className="bg-blue w-8 h-1 rounded "></div>
        <div className="bg-blue w-8 h-1 rounded "></div>
        <div className="bg-blue w-8 h-1 rounded "></div>
      </div>
      <div
        className="bg-darkyellow  absolute top-0 right-0 h-[100vh] opacity-0 py-10 px-5 "
        ref={drawerRef}
      >
        <ul className="flex flex-col gap-5 cursor-pointer">
          <li>Service</li>
          <li>Portfolio</li>
          <li>Company</li>
          <li>Events & Media</li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerNavbar;
