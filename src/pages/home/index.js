import React from "react";
import "./home.css";
import Logo from "../../components/icons/logo/Logo";
import SearchIconbar from "../../components/icons/searchIconBar/SearchIconbar";
import AssessIcon from "../../components/icons/navIcons/AssessIcon";
import CommentsIcon from "../../components/icons/navIcons/CommentsIcon";
import DashboardIcon from "../../components/icons/navIcons/DashboardIcon";
import RoadmapsIcon from "../../components/icons/navIcons/RoadmapsIcon";
import UserManualsIcon from "../../components/icons/navIcons/UserManualsIcon";
const Home = () => {
  return (
    <div className="flex">
      <div className="l-main-nav h-screen w-[280] flex flex-col justify-between bg-[#14143E] text-gray-50">
        <div className="flex flex-col justify-center pt-8 px-6 gap-6">
          <div className="logo">
            <Logo></Logo>
          </div>
          <div className="search">
            <div className="flex items-center w-full pl-5 py-2 rounded-lg bg-[#475467] text-gray-100 focus:outline-none">
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
          <div className="nav flex flex-col">
            <div className="py-2 px-3 flex gap-2">
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
            <div className="py-2 px-3 flex gap-2">
              <RoadmapsIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100">
                Roadmaps
              </div>
            </div>
            <div className="py-2 px-3 flex gap-2">
              <CommentsIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100">
                Comments
              </div>
            </div>
            <div className="py-2 px-3 flex gap-2">
              <UserManualsIcon />
              <div className="font-inter font-medium text-base leading-6 text-gray-100">
                User Manuals
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col"></div>
          <div className="user-info flex">
            <div className="image">+++</div>
            <div className="text-containre flex flex-col">
              <div>top user info</div>
              <div>bottom user info</div>
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
