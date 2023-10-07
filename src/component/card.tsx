import Modal from "./modal";

interface productCard {
  clientName: string;
  title: string;
  description: string;
  projectStartTime: string;
  projectEndTime: string;
  imageUrl: string;
  modalDescription: string;

  style?: React.CSSProperties;
  backgroundColor?: string;
  textColor?: string;
}

export const ProductCard = ({
  clientName,
  title,
  description,
  projectEndTime,
  projectStartTime,
  imageUrl,
  style,
  backgroundColor,
  textColor,
  modalDescription,
}: productCard) => {
  return (
    <>
      <Modal
        title={title}
        modalContent={
          <ModalContent
            clientName={clientName}
            description={description}
            imageUrl={imageUrl}
            projectEndTime={projectEndTime}
            projectStartTime={projectStartTime}
            title={title}
            modalDescription={modalDescription}
          />
        }
      >
        <div
          className=" cursor-pointer border-2 card h-[70vh] md:max-w-[30vw] overflow-hidden"
          style={style}
        >
          <div
            className="bg-[#184ADD] px-5 py-10 flex flex-col gap-[1.5rem]"
            style={{ backgroundColor: backgroundColor }}
          >
            <div>
              <span
                className="text-white text-lg font-bold  "
                style={{ color: textColor }}
              >
                {title}
              </span>
            </div>

            <div>
              <span
                className="text-white text-xs "
                style={{ color: textColor }}
              >
                {description}
              </span>
            </div>

            <div className="flex flex-col gap-[1.5rem] md:flex-row  ">
              <div>
                <div>
                  <span
                    className="text-darkyellow font-bold text-sm"
                    style={{ color: textColor }}
                  >
                    Client
                  </span>
                </div>
                <div className="w-[15vw] ">
                  <span
                    className="text-sm text-white font-bold text-xs  "
                    style={{ color: textColor }}
                  >
                    {clientName}
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <span
                    className="text-darkyellow font-bold text-sm"
                    style={{ color: textColor }}
                  >
                    Time Duration
                  </span>
                </div>
                <div>
                  <span
                    className="text-xs text-white font-bold "
                    style={{ color: textColor }}
                  >
                    {projectStartTime} - {projectEndTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[400px] ">
            <img
              src={imageUrl}
              alt="prodcut image"
              className="object-cover object-left-top w-[100%] h-[100%]"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

interface modalContentProps {
  clientName: string;
  title: string;
  description: string;
  projectStartTime: string;
  projectEndTime: string;
  imageUrl: string;
  modalDescription: string;
}

const ModalContent = ({
  imageUrl,
  clientName,
  description,
  projectEndTime,
  projectStartTime,
  title,
  modalDescription,
}: modalContentProps) => {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex ">
        <div className=" h-[200px] w-[300px] ">
          <img
            src={imageUrl}
            alt="prodcut image"
            className="object-cover object-left-top w-[100%] h-[100%]"
          />
        </div>

        <div className="px-5  flex flex-col gap-[1.5rem]">
          <div>
            <span className=" text-lg font-bold  ">{title}</span>
          </div>

          <div>
            <span className=" text-xs ">{description}</span>
          </div>

          <div className="flex flex-col gap-[1.5rem] md:flex-row  ">
            <div>
              <div>
                <span className="text-darkyellow font-bold text-sm">
                  Client
                </span>
              </div>
              <div className="w-[15vw] ">
                <span className="text-sm  font-bold text-xs  ">
                  {clientName}
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="text-darkyellow font-bold text-sm">
                  Time Duration
                </span>
              </div>
              <div>
                <span className="text-xs font-bold ">
                  {projectStartTime} - {projectEndTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: modalDescription }} />
    </div>
  );
};
