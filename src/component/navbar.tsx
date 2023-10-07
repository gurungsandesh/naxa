import Tooltip from "./tooltip";

import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-16 ">
        <li className="cursor-pointer">Services</li>

        <Tooltip
          tooltipContent={
            <TooltipContent menu={["General", "International"]} />
          }
        >
          <li className="cursor-pointer group">
            <div className="flex justify-center items-center gap-3 ">
              <span>Protfolio</span>
              <div className="group-hover:rotate-[180deg]">
                <AiFillCaretDown />
              </div>
            </div>
          </li>
        </Tooltip>
        <Tooltip
          tooltipContent={
            <TooltipContent
              menu={[
                "About us",
                "Team",
                "Work with us",
                "Awards and Achivement",
              ]}
            />
          }
        >
          <li className="cursor-pointer group">
            <div className="flex justify-center items-center gap-3 ">
              <span>Company</span>
              <div className="group-hover:rotate-[180deg]">
                <AiFillCaretDown />
              </div>
            </div>
          </li>
        </Tooltip>
        <Tooltip
          tooltipContent={
            <TooltipContent menu={["Events", "Media", "Publication"]} />
          }
        >
          <li className="cursor-pointer group">
            <div className="flex justify-center items-center gap-3 ">
              <span>Events</span>
              <div className="group-hover:rotate-[180deg]">
                <AiFillCaretDown />
              </div>
            </div>
          </li>
        </Tooltip>
        <li className="cursor-pointer">Blog</li>
      </ul>
    </nav>
  );
};

export default Navbar;

interface tooltipContentProps {
  menu: string[];
}

const TooltipContent = ({ menu }: tooltipContentProps) => {
  return (
    <div className="min-w-[200px] bg-white  flex flex-col">
      {menu.map((val: any) => (
        <div className="hover:bg-yellow py-3 px-5">{val}</div>
      ))}
    </div>
  );
};
