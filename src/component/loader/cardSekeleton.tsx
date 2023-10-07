const CardSekeleton = () => {
  return (
    <div className="border-2 card h-[70vh] md:w-[30vw] overflow-hidden ">
      <div className=" px-5 py-10 flex flex-col gap-[1.5rem]  ">
        <div className="animate-sekeletonanimation w-[25%] h-5"></div>

        <div className="animate-sekeletonanimation w-[100%] h-20"></div>
        <div className="animate-sekeletonanimation w-[80%] h-20"></div>
        <div className=" animate-sekeletonanimation h-24 w-[80%] "></div>
      </div>
    </div>
  );
};

export default CardSekeleton;
