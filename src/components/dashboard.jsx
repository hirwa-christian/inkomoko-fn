import React from "react";
import Award from "../assets/Award.svg";
import Logo from "../assets/Logo.svg";
import Frame from "../assets/Frame 40640.svg";
import Goal from "../assets/octicon_goal-16 (1).svg";
import Halfpie from "./Halfpie";
import Sidebar from "./sidebar";
import Gamepad from "../assets/gamepad-2.svg";
import SimpleBar from "./Simplebar";
import Icon from "../assets/Icon.svg";
import Icons from "../assets/Icon (1).svg";
import Icon2 from "../assets/Icon (2).svg";
import Icon3 from "../assets/Icon (3).svg";
import Arrow from "../assets/arrow-right.svg";
import Up from "../assets/Up arrow.svg";
import Icon4 from "../assets/Icon (4).svg";
import Icon5 from "../assets/Icon (5).svg";
import Icon6 from "../assets/Icon (6).svg";
import Other from "../assets/Others.svg";
import search from "../assets/search.svg";
import Notification from "../assets/Notification icon.svg"
const Dashboard = () => {
  return (
    <div className="w-full h-screen flex mx-auto">
      <Sidebar />

      <div className="w-full ml-60">
        <div className="">
          <div className="flex flex-row items-center justify-between border-b-2 w-full h-20 px-6">
            <div className="flex flex-row items-center ">
              <h2 className=" text-2xl  font-bold">Business</h2>
              <span className="text-sm ml-20 text-[#9f9f9f]">May 19,2023</span>
            </div>

            <div className="flex ">
                <img src={Notification} 
                className="flex mx-5"
                alt="" />
              <input
                type="text"
                placeholder="Search here"
                className="flex ml-10 rounded-xl h-14 w-96  p-5"
              />
              <img
                src={search}
                className="flex px-5 ml-[-45px] mt-3 h-[20px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full px-5">
          <div className="grid grid-cols-3 md:w-full lg:w-full gap-8">
            <div>
                <h1 className="text-xl text-[#878787] font-semibold ">Total Balance</h1>
                <div className="bg-white mt-5 rounded-xl shadow-xl  md:w-full py-10 lg:w-full w-[400px] ">
              <div className="flex items-center justify-between px-4 border-b-2">
              <h1 className="text-2xl font-bold">
                $240,399{" "}
                
              </h1>
              <span className="flex text-base mt-2 ml-20 font-thin">
                  All Acoounts
                </span>{" "}
              </div>
              <div className="m-5 p-2 rounded  bg-[#FB3F6C]">
                <p className="flex text-[#F4F5F7] text-base">
                  Account Type{" "}
                  <span className="bg-[]">
                    <img src={Logo} className="ml-40" alt="" />
                  </span>
                </p>
                <h3 className=" text-base font-bold  text-white">Debit Card</h3>
                <p className=" text-[#F4F5F7]">
                  **** **** **** 2598{" "}
                  <span className="font-bold ml-20">$25000</span>
                </p>
              </div>
            </div>
            </div>

           <div>
            <h1 className=" text-xl text-[#878787] font-semibold ">Goal</h1>
           <div className=" bg-white md:w-full lg:w-full py-6 shadow-xl rounded-xl mt-5 w-[400px]">
              <h1 className="flex px-5 my-5 text-2xl items-center font-bold border-b-2">
                $200,000{" "}
                <span>
                  <img src={Frame} className="ml-2" alt="" />
                </span>{" "}
                <span className="flex text-base text-[#525256] mt-2 ml-20 font-thin">
                  May,2023
                </span>{" "}
              </h1>
              <span className="flex ml-5  text-[#878787] ">
                <span>
                  <img src={Award} alt="" />
                </span>
                Target Achieved
              </span>
              <p className="flex text-xl ml-10  font-bold"> $12,500 </p>
              <span className="flex ml-5 text-[#878787]">
                <span>
                  <img src={Goal} alt="" />
                </span>
                This month Target
              </span>
              <p className="flex text-xl ml-10  font-bold">$20,000</p>

              <span className="flex ml-52 m-[-100px] w-60">
                {" "}
                <Halfpie />{" "}
              </span>
              <span className="flex text-md ml-44">Target vs Achievement</span>
            </div>
           </div>
            <div>
                <div className="flex  justify-between">
                <h1 className=" text-xl text-[#878787] font-semibold ">Upcoming Bill</h1>
                <p className=" text-sm text-[#878787]">View All</p>
                </div>
            <div className="bg-white md:w-full lg:w-full mt-5 rounded-xl shadow-xl py-8 h-232 w-[400px] ">
              <div className="flex p-5 text-2xl  font-bold border-b-2">
                <p className="w-[44px] bg-[#D2D2D2] rounded-md text-center text-base font-thin">
                  <span className="flex text-base ml-2">May</span>
                  <span className="font-bold text-base">15</span>
                </p>
                <p>
                  <span className=" text-base text-[#525256] mt-2 ml-5 font-bold">
                    Odoo-Monthly
                  </span>
                  <p className="flex ml-5 text-sm font-extralight">
                    Last Charge -17 Jun,2023
                  </p>
                </p>
                <span className="flex bg-[white]  border-slate-300 rounded-md border text-base font-bold w-[60px]  text-[#525256] mt-2 ml-5 ">
                  <span className="ml-2 mt-2">$150</span>
                </span>
              </div>
              <div className="flex p-5 text-2xl  font-bold ">
                <p className="w-[44px] bg-[#D2D2D2] rounded-md text-center text-base font-thin">
                  <span className="flex text-base ml-2">Jun</span>
                  <span className="font-bold text-base">16</span>
                </p>
                <p>
                  <span className=" text-base text-[#525256] mt-2 ml-5 font-bold">
                    M365-Yearly
                  </span>
                  <p className="flex ml-5 text-sm font-extralight">
                    Last Charge -17 Jun,2023
                  </p>
                </p>
                <span className="flex bg-[white]  border-slate-300 rounded-md border text-base font-bold w-[60px]  text-[#525256] mt-2 ml-5 ">
                  <span className="ml-2 mt-2">$559</span>
                </span>
              </div>
            </div>
            </div>

          </div>
        </div>

        <div className="flex px-5 gap-8 grid-cols-2 mt-5 ">
    <div className="">
        <div className="flex text-[#878787] my-5 justify-between">
    <h1 className="text-2xl">Recent Transaction</h1>
    <p className="text-sm">View All</p>
    </div>
          <div className="w-[400px] grid shadow-xl rounded-xl bg-white ">
            
            <div className=" md:w-full lg:w-full">
              <p className="flex md:w-full lg:w-full justify-evenly">
                <span className="flex text-base font-bold border-b-2 border-[#299D91] text-[#299D91]">
                  All
                </span>
                <span className="flex font-bold text-[#525256]">Revenue</span>
                <span className="flex font-bold text-[#525256]">Expenses</span>
              </p>
            </div>

            <div className="flex justify-evenly md:w-full lg:w-full m-2  h-[88px] border-b-2 items-center">
              <p className="">
                <span className="flex gap-5 text-[#191919] text-base font-bold">
                  <img
                    src={Gamepad}
                    className="bg-[#D2D2D2] p-[8px] rounded"
                    alt=""
                  />
                  Profit
                </span>
                <span className="flex text-[#9F9F9F] ml-14 mt-[-17px] text-xs">
                  Gadget & Gear
                </span>
              </p>
              <p className="">
                <span className="flex text-[#525256] text-base font-bold">
                  $16000.00
                </span>
                <span className="flex text-[#9F9F9F] text-xs ">
                  17 May 2023
                </span>
              </p>
            </div>

            <div className="flex justify-evenly md:w-full lg:w-full m-2 w-[316px] h-[88px] border-b-2 items-center">
              <p className="">
                <span className="flex gap-5 text-[#191919] text-base  font-bold">
                  <img
                    src={Icon}
                    className="bg-[#D2D2D2] h-[24] w-[24] rounded"
                    alt=""
                  />
                  Grant
                </span>
                <span className="flex text-[#9F9F9F] ml-14 mt-[-17px] text-xs">
                  XL fashions
                </span>
              </p>
              <p className="">
                <span className="flex text-[#525256] text-base font-bold">
                  $20000.00
                </span>
                <span className="flex text-[#9F9F9F] text-xs ">
                  17 May 2023
                </span>
              </p>
            </div>

            <div className="flex justify-evenly md:w-full lg:w-full m-2 w-[316px] h-[88px] border-b-2 items-center">
              <p className="">
                <span className="flex gap-5 text-[#191919] text-base  font-bold">
                  <img
                    src={Icons}
                    className="bg-[#D2D2D2] h-[24] w-[24] rounded"
                    alt=""
                  />
                  Salaries
                </span>
                <span className="flex text-[#9F9F9F] ml-14 mt-[-17px] text-xs">
                  Hajir Biriyani
                </span>
              </p>
              <p className="">
                <span className="flex text-[#525256] text-base font-bold">
                  $10000.00
                </span>
                <span className="flex text-[#9F9F9F] text-xs ">
                  17 May 2023
                </span>
              </p>
            </div>

            <div className="flex justify-evenly md:w-full lg:w-full m-2 w-[316px] h-[88px] border-b-2 items-center">
              <p className="">
                <span className="flex gap-5 text-[#191919] text-base  font-bold">
                  <img
                    src={Icon2}
                    className="bg-[#D2D2D2] h-[24] w-[24] rounded"
                    alt=""
                  />
                  lunch
                </span>
                <span className="flex text-[#9F9F9F] ml-14 mt-[-17px] text-xs">
                  Uber
                </span>
              </p>
              <p className="">
                <span className="flex text-[#525256] text-base font-bold">
                  $12000.00
                </span>
                <span className="flex text-[#9F9F9F] text-xs ">
                  17 May 2023
                </span>
              </p>
            </div>

            <div className="flex justify-evenly md:w-full lg:w-full m-2  h-[88px] border-b-2 items-center">
              <p className="">
                <span className="flex gap-5 text-[#191919] text-base  font-bold">
                  <img
                    src={Gamepad}
                    className="bg-[#D2D2D2] p-[8px] rounded"
                    alt=""
                  />
                  laptops
                </span>
                <span className="flex text-[#9F9F9F] ml-14 mt-[-17px] text-xs">
                  Gadget & Gear
                </span>
              </p>
              <p className="">
                <span className="flex text-[#525256] text-base font-bold">
                  $12000.00
                </span>
                <span className="flex text-[#9F9F9F] text-xs ">
                  17 May 2023
                </span>
              </p>
            </div>
          </div>
          </div>
          

          <div className="w-full  rounded-lg ">
          <div>
            <h1 className="text-xl text-[#878787] my-5 font-semibold ">Statistics</h1>
            <div className="bg-white h-72 shadow-xl rounded-xl">
               
               <span className="md:w-full lg:w-full">
                 {" "}
                 <SimpleBar />
               </span>
             </div>
          </div>

           <div>
            <div className="flex justify-between text-[#878787] my-5 ">
            <h1 className="text-xl font-semibold ">Expenses Breakdown</h1>
            <p className="text-sm">*Compare to last month</p>
            </div>
            <div className="bg-[white] shadow-xl rounded-2xl">
              <div className="flex justify-between md:w-full lg:w-full">
                <p>
                  <span className="flex text-[#878787] text-xs ml-5 gap-3 mt-5">
                    <img src={Icon3} alt="" />
                    Housing
                    <img src={Arrow} className="flex ml-3" alt="" />
                  </span>
                  <span className="flex mt-[-40px] ml-[70px] text-base  font-bold">
                    $2500.00
                  </span>
                  <span className="flex text-[#878787] text-xs ml-[70px]">
                    15%* <img src={Up} alt="" />
                  </span>
                </p>

                <p>
                  <span className="flex text-[#878787] text-xs ml-5 gap-3 mt-5">
                    <img src={Icon4} alt="" />
                    subscriptions
                    <img src={Arrow} className="flex ml-3" alt="" />
                  </span>
                  <span className="flex mt-[-40px] ml-[70px] text-base  font-bold">
                    $350.00
                  </span>
                  <span className="flex text-[#878787] text-xs ml-[70px]">
                    08%* <img src={Up} alt="" />
                  </span>
                </p>

                <p>
                  <span className="flex text-[#878787] text-xs ml-5 gap-3 mt-5">
                    <img src={Icon5} alt="" />
                    lunch
                    <img src={Arrow} className="flex ml-3" alt="" />
                  </span>
                  <span className="flex mt-[-40px] ml-[70px] text-base  font-bold">
                    $80.00
                  </span>
                  <span className="flex text-[#878787] text-xs ml-[70px]">
                    15%* <img src={Up} alt="" />
                  </span>
                </p>
              </div>

              <div className="flex mt-10 justify-between">
                <p>
                  <span className="flex text-[#878787] text-xs ml-5 gap-3 mt-5">
                    <img src={Icon6} alt="" />
                    electricity
                    <img src={Arrow} className="flex ml-3" alt="" />
                  </span>
                  <span className="flex mt-[-40px] ml-[70px] text-base  font-bold">
                    $420.00
                  </span>
                  <span className="flex text-[#878787] text-xs ml-[70px]">
                    25%* <img src={Up} alt="" />
                  </span>
                </p>

                <p>
                  <span className="flex text-[#878787] text-xs ml-[-20px] gap-3 mt-5">
                    <img src={Icon} alt="" />
                    <span className="flex mt-[-10px]">Salaries</span>
                    <img src={Arrow} className="flex ml-10" alt="" />
                  </span>
                  <span className="flex mt-[-35px] ml-[30px] text-base  font-bold">
                    $650.00
                  </span>
                  <span className="flex text-[#878787] text-xs ml-[30px]">
                    23%* <img src={Up} alt="" />
                  </span>
                </p>
                <p>
                  <span className="flex text-[#878787] text-xs ml-5 gap-3 mt-5">
                    <img src={Other} className="flex ml-[-30px]" alt="" />
                    <span className="flex mt-[-10px]">trips</span>
                    <img src={Arrow} className="flex ml-[40px]" alt="" />
                  </span>
                  <span className="flex mt-[-20px] ml-[25px] text-base  font-bold">
                    $2500.00
                  </span>
                  <span className="flex text-[#878787] text-xs ml-[70px]">
                    <span className="flex ml-[-43px]"> 15%*</span>
                    <img src={Up} className="flex ml-" alt="" />
                  </span>
                </p>
              </div>
            </div>
           </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
