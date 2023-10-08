import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/naxa.png";
import { ProductCard } from "../component/card";
import Custombutton from "../component/customButton";
import Footer from "../component/footer";
import HamburgerNavbar from "../component/hamburgerNavbar";
import CardSekeleton from "../component/loader/cardSekeleton";
import Navbar from "../component/navbar";
import ProjectNavigationCard from "../component/projectNavigationCard";
import { FETCH_DATA_REQUEST } from "../store/sagas/action";
import { RootState } from "../store/store";

interface cardAccentProps {
  backgroundColor: string;
  textColor: string;
}

const cardAccent: cardAccentProps[] = [
  {
    backgroundColor: "#184ADD",
    textColor: "#ffffff",
  },
  {
    backgroundColor: "#184ADD",
    textColor: "#ffffff",
  },
  {
    backgroundColor: "#333333",
    textColor: "#ffffff",
  },
  {
    backgroundColor: "#B30732",
    textColor: "#ffffff",
  },
  {
    backgroundColor: "#F8E1E5",
    textColor: "#333333",
  },
  {
    backgroundColor: "#EFEFEF",
    textColor: "#333333",
  },
  {
    backgroundColor: "#1281AD",
    textColor: "#ffffff",
  },
  {
    backgroundColor: "#184ADD",
    textColor: "#ffffff",
  },
];

const Keyhighlights = () => {
  const [keyDataList, setKeyDataList] = useState<any>([]);

  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state?.data);

  useEffect(() => {
    if (data) {
      let keyData = data.filter((val: any) => val.is_key_highlight === true);
      setKeyDataList(keyData);
    }

    return () => {};
  }, [data]);

  useEffect(() => {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });

    return () => {};
  }, []);

  return (
    <div className="bg-[#F4F4F4] overflow-hidden">
      <div className="flex justify-between items-center  w-[70vw] m-auto pt-4 ">
        <div className="cursor-pointer w-[90px] md:w-[120px]">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex min-w-[30vw] ">
          <Navbar />
        </div>
        <div
          className="flex content-between items-center gap-2 "
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="min-w-[120px]">
            <Custombutton label="Let's talk" />
          </div>
          <div className="min-w-[20px] md:hidden ">
            <HamburgerNavbar />
          </div>
        </div>
      </div>
      <div className=" h-[40vh] bg-image bg-no-repeat bg-[#F4F4F4] md:w-[70vw] md:m-auto ">
        <div className="text-center pt-40 md:pt-30">
          <span className="text-darkyellow font-bold ">PORTFOLIO</span>
        </div>
        <div className="text-center md:w-[40vw] m-auto">
          <span className="text-5xl md:text-6xl  font-medium">
            Diverse, <span className="text-blue">Impactful</span>, and Reliable.
          </span>
        </div>
      </div>

      <div className="w-[100vw] bg-white pt-20 pb-20 ">
        <div className="  md:w-[100vw] -mt-[230px]  ">
          <div className="md:w-[80vw] md:m-auto p-20 ">
            <ProjectNavigationCard />
          </div>
        </div>
        <div className="w-[80vw] m-auto mb-[15rem] flex flex-col gap-y-16 md:flex-row md:flex-wrap md:gap-10 md:justify-center ">
          {!data && <CardSekeleton />}
          {!data && <CardSekeleton />}
          {!data && <CardSekeleton />}
          {!data && <CardSekeleton />}

          {keyDataList.map((val: any, index: number) => (
            <ProductCard
              clientName={val.clients}
              title={val.title}
              description={val.subtitle}
              projectStartTime={val.start_date}
              projectEndTime={val.end_date}
              imageUrl={val.photo}
              key={`${val.id} ${val.title}`}
              style={index % 2 !== 0 ? { marginTop: "-15px" } : {}}
              backgroundColor={cardAccent[index]?.backgroundColor}
              textColor={cardAccent[index]?.textColor}
              modalDescription={val.description}
            />
          ))}
        </div>
      </div>
      <div className="min-h-[70vh] bg-[#F4F4F4]">
        <Footer />
      </div>
    </div>
  );
};

export default Keyhighlights;
