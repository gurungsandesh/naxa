import { ArrowRightOutlined } from "@ant-design/icons";

interface customButton {
  label: string;
}

const Custombutton = ({ label }: customButton) => {
  return (
    <div className="group bg-yellow hover:bg-darkyellow  transition-all duration-200 cursor-pointer w-1/2.5 px-5 py-2 text-xs flex gap-2 justify-items-center align-middle">
      <span className="text-blue group-hover:animate-moveleft ">{label}</span>
      <span className="grid place-items-center ">
        <ArrowRightOutlined className=" group-hover:animate-moveright " />
      </span>
    </div>
  );
};

export default Custombutton;
