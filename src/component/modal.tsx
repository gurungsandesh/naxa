import { CloseOutlined } from "@ant-design/icons";

interface modalProps {
  title: string;
  modalContent: React.ReactNode;
  children: React.ReactNode;
}

const Modal = ({ modalContent, children, title }: modalProps) => {
  return (
    <div>
      <div>
        <a href={`#${title}`}>{children}</a>
      </div>
      <div
        id={title}
        className="fixed top-0 right-0 bottom-0 left-0 z-50  bg-gray-500/[0.25] invisible
         opacity-0 pointer-events-none transition-all duration-300 target:visible
          target:opacity-100 target:pointer-events-auto bg-transparent"
      >
        <div className="w-[90vw] md:w-[45vw] absolute top-[100px] bottom-[100px] left-1/2 -translate-x-[50%]  p-5 bg-slate-100 ">
          <a
            href="#"
            title="Close"
            className="text-2xl absolute right-0 -top-12 text-center m-2 overflow-hidden"
          >
            <CloseOutlined />
          </a>
          {modalContent}
        </div>
      </div>
    </div>
  );
};

export default Modal;
