import React from "react";
import "./home.css";
import Logo from "../../components/icons/logo/Logo";
import SearchIconbar from "../../components/icons/searchIconBar/SearchIconbar";
import AssessIcon from "../../components/icons/navIcons/AssessIcon";
import CommentsIcon from "../../components/icons/navIcons/CommentsIcon";
import DashboardIcon from "../../components/icons/navIcons/DashboardIcon";
import RoadmapsIcon from "../../components/icons/navIcons/RoadmapsIcon";
import UserManualsIcon from "../../components/icons/navIcons/UserManualsIcon";
import NotiIcon from "../../components/icons/navIcons/NotiIcon";
import SettingsIcon from "../../components/icons/navIcons/SettingsIcon";
import SuppIcon from "../../components/icons/navIcons/SuppIcon";
const Home = () => {
  return (
    <div className="flex">
      <div className="l-main-nav min-h-screen w-[280] flex flex-col justify-between bg-[#14143E] text-gray-50">
        <div className="flex flex-col justify-center pt-8 px-6 gap-3">
          <div className="logo">
            <Logo></Logo>
          </div>
          <div className="search">
            <div className="flex items-center w-full px-5 py-2 rounded-lg bg-[#475467] text-gray-100 focus:outline-none">
              <div className="mr-2">
                <SearchIconbar></SearchIconbar>
              </div>
              <input
                type="text"
                className="w-full py-2 rounded-lg bg-[#475467] text-gray-100 font-inter font-medium text-base leading-6 focus:outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="nav flex flex-col gap-2">
            <div className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl">
              <DashboardIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100">
                Dashboard
              </div>
            </div>
            <div className="active py-2 px-3 flex gap-2 bg-[#37375B] rounded-xl">
              <AssessIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100 ">
                Assessments
              </div>
            </div>
            <div className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl">
              <RoadmapsIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100">
                Roadmaps
              </div>
            </div>
            <div className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl">
              <CommentsIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100">
                Comments
              </div>
            </div>
            <div className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl">
              <UserManualsIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100">
                User Manuals
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center pb-8 px-6 gap-3">
          <div className="nav-bottom flex flex-col gap-2">
            <div className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl">
              <NotiIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100">
                Notifications
              </div>
            </div>
            <div className="active py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl">
              <SuppIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100 ">
                Support
              </div>
            </div>
            <div className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl">
              <SettingsIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100">
                Settings
              </div>
            </div>
          </div>
          <div className="user-info flex items-center p-4">
            <div className="image p-2 bg-gray-800 rounded-full text-gray-100">
              +++
            </div>
            <div className="text-container flex flex-col ml-4">
              <div className="font-medium text-base text-gray-100">
                Top User Info
              </div>
              <div className="text-sm text-gray-400">Bottom User Info</div>
            </div>
          </div>
        </div>
      </div>
      <div className="r-assessments-initial flex-grow-[5] bg-[#14143E] pt-4 ">
        <div className="bg-white rounded-tl-xl p-8 h-full">
          <div className="text-slate-700 font-medium ">test</div>
          <div className="text-slate-700 font-medium">test</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
