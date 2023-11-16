import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../icons/logo/Logo";
import SearchIconbar from "../icons/searchIconBar/SearchIconbar";
import DashboardIcon from "../icons/navIcons/DashboardIcon";
import AssessIcon from "../icons/navIcons/AssessIcon";
import RoadmapsIcon from "../icons/navIcons/RoadmapsIcon";
import CommentsIcon from "../icons/navIcons/CommentsIcon";
import UserManualsIcon from "../icons/navIcons/UserManualsIcon";
import NotiIcon from "../icons/navIcons/NotiIcon";
import SuppIcon from "../icons/navIcons/SuppIcon";
import SettingsIcon from "../icons/navIcons/SettingsIcon";
import LogoutIcon from "../icons/navIcons/LogoutIcon";
import { MyContext } from "../../MyContext";
import "./Navbar.css";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  const { setIsOpen } = useContext(MyContext);
  const { setIsSupportOpen } = useContext(MyContext);

  return (
    <div className="l-main-nav min-h-screen w-[480px] flex flex-col justify-between bg-[#14143E] text-gray-50">
      <div className="flex flex-col justify-center pt-8 px-8 gap-3">
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
              className="w-full bg-[#475467] text-gray-100 font-inter font-medium leading-6 focus:outline-none"
              placeholder={t("search")}
            />
          </div>
        </div>
        <div className="top-nav flex flex-col gap-2">
          <NavLink
            exact
            to="/dashboard/home"
            className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl"
            activeClassName="active"
          >
            <DashboardIcon />
            <div className="font-inter font-medium text-sm leading-6 text-gray-100">
              {t("dashboard")}
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/assessments"
            className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl"
            activeClassName="active"
          >
            <AssessIcon />
            <div className="font-inter font-medium text-sm leading-6 text-gray-100 ">
              {t("assessments")}
            </div>
          </NavLink>
          <NavLink
            to="/dashboard/roadmaps"
            className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl"
            activeClassName="active"
          >
            <RoadmapsIcon />
            <div className="font-inter font-medium text-sm leading-6 text-gray-100">
              {t("roadmaps")}
            </div>
          </NavLink>
          <button
            onClick={() => setIsOpen(true)}
            className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl"
          >
            <CommentsIcon />
            <div className="font-inter font-medium text-sm leading-6 text-gray-100">
              {t("comments")}
            </div>
          </button>
          <NavLink
            to="/dashboard/user-manuals"
            className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl"
            activeClassName="active"
          >
            <UserManualsIcon />
            <div className="font-inter font-medium text-sm leading-6 text-gray-100">
              {t("usermanuals")}
            </div>
          </NavLink>
        </div>
      </div>
      <div className="relative nav-bottom flex flex-col justify-center pb-8 px-8 gap-3">
        <div className="flex flex-col gap-2">
          <NavLink
            to="/dashboard/notifications"
            className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl"
            activeClassName="active"
          >
            <NotiIcon />
            <div className="font-inter font-medium text-sm leading-6 text-gray-100">
              {t("notifications")}
            </div>
          </NavLink>
          <button
            onClick={() => setIsSupportOpen(true)}
            className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl"
          >
            <SuppIcon />
            <div className="font-inter font-medium text-sm leading-6 text-gray-100">
              {t("support")}
            </div>
          </button>

          <NavLink
            to="/dashboard/settings"
            className="py-2 px-3 flex gap-2 hover:bg-[#37375B] hover:rounded-xl"
            activeClassName="active"
          >
            <SettingsIcon />
            <div className="font-inter font-medium text-sm leading-6 text-gray-100">
              {t("settings")}
            </div>
          </NavLink>
        </div>
        <div className="user-info flex items-center p-4 border-t border-gray-300">
          <div className="image p-2 bg-gray-800 rounded-full text-gray-100">
            +++
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-container flex flex-col ml-4">
              <div className="font-inter font-medium text-sm text-gray-100">
                <div className="text-xs font-medium text-gray-100">
                  Léa Tremblay
                </div>
                <div className="text-xs text-gray-400">Lea@untitledui.com</div>
              </div>
            </div>
            <LogoutIcon></LogoutIcon>
          </div>
        </div>
        <div className="absolute bottom-0 right-8 p-4 flex gap-2 justify-end">
          <button
            className="z-20 text-sm font-medium text-gray-100"
            onClick={() => handleTrans("en")}
          >
            en
          </button>
          <button
            className="z-20 text-sm font-medium text-gray-100"
            onClick={() => handleTrans("fr")}
          >
            fr
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
