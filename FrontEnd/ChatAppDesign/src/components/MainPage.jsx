import { AiFillHome } from "react-icons/ai";
import { IoMdChatbubbles, IoMdContacts } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

const MainPage = () => {
  return (
    <section className="chat flex flex-row">
      <div className="profile w-[25%] h-screen bg-title flex flex-col items-center">
        <div className="firstProfile w-full h-2/6 flex flex-col items-center">
          <img
            src="./img/pp.png"
            className="profilepic w-20 h-20 rounded-[50px] mt-20"
          />
          <h1 className="name mt-3 font-Raleway text-black text-[20px] font-semibold text-center w-[250px]">
            Giorgi Meskhoradze
          </h1>
        </div>

        <div className="flex flex-col justify-around h-screen">

          <div className="firstProfile w-full h-2/6 flex flex-col items-center gap-8 mt-8">
            <div className="flex flex-row gap-2 justify-center items-center h-[30px]">
              <AiFillHome size={25} />
              <h1 className="font-Raleway text-black text-[20px] font-medium text-start w-[250px] h-[25px]">
                Home
              </h1>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center h-[30px]">
              <IoMdChatbubbles size={25} />
              <h1 className="font-Raleway text-black text-[20px] font-medium text-start w-[250px] h-[25px]">
                Chat
              </h1>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center h-[30px]">
              <MdContacts size={25} />
              <h1 className="font-Raleway text-black text-[20px] font-medium text-start w-[250px]">
                Contact
              </h1>
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-center items-center h-[30px]">
            <RiLogoutBoxLine size={25} />
            <h1 className="font-Raleway text-black text-[20px] font-medium text-start w-[250px]">
              Log Out
            </h1>
          </div>

        </div>

      </div>
      <div className="chatName w-[30%] h-screen bg-lightPurple"></div>
      <div className="chat w-[45%] h-screen bg-lightPurple"></div>
    </section>
  );
};

export default MainPage;
