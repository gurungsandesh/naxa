import { useState } from "react";

const projectTypeList = [
  "Key Highlights",
  "Web GIS And Data Visualization",
  "Training & Capacity Building",
  "Surveying And GIS Mapping",
  "Disaster Risk Resilience",
  "Software & Application Development",
  "Innovation In Land Reform And Management",
  "Open Data Initiatives",
  "E-Governance",
  "Frontier Technologies",
];

const ProjectNavigationCard = () => {
  const [activeMenu, setActiveMenu] = useState<string>("Key Highlights");

  const handleOnSelectMenu = (val: string) => {
    setActiveMenu(val);
  };

  return (
    <div className="border shadow-md ">
      <ul className="flex flex-wrap my-2 ">
        {projectTypeList.map((val: string) => (
          <li
            key={val}
            onClick={() => handleOnSelectMenu(val)}
            className={`${"w-[95%] text-gray-600 px-10 py-2 m-auto text-center hover:bg-darkyellow active:bg-yellow hover:text-blue cursor-pointer font-medium md:w-auto"} ${
              activeMenu === val ? "bg-yellow text-blue" : ""
            }`}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectNavigationCard;
