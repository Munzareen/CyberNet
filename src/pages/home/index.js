import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Drawer from "../../components/drawer/Drawer";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="r-assessments-initial bg-[#14143E] pt-4 w-full">
      <div className="bg-white rounded-tl-3xl py-4 px-8 h-full flex flex-col">
        {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
        <div className="flex flex-col pt-1">
          <h1 className="text-[#101828] text-2xl font-bold font-inter">
            {t("welcomeolivia")}
          </h1>
          <p className="text-[#475467] text-sm font-medium font-inter text-left">
            {t("youhavenotanykeymetrics")}
          </p>
        </div>
        <div className="flex flex-col flex-wrap gap-14 px-20 py-0">
          <div className="flex gap-24 ">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <div className="icon rounded-full p-3 bg-[#ECF1FD] flex justify-center items-center border-8 border-[#F9F5FF]">
                <svg
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8.5V5.8C17 4.11984 17 3.27976 16.673 2.63803C16.3854 2.07354 15.9265 1.6146 15.362 1.32698C14.7202 1 13.8802 1 12.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21H11M11 10H5M7 14H5M13 6H5M13.5 14.0022C13.6762 13.5014 14.024 13.079 14.4817 12.81C14.9395 12.5409 15.4777 12.4426 16.001 12.5324C16.5243 12.6221 16.999 12.8942 17.3409 13.3004C17.6829 13.7066 17.87 14.2207 17.8692 14.7517C17.8692 16.2506 15.6209 17 15.6209 17M15.6499 20H15.6599"
                    stroke="#3855F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#101828] text-lg font-semibold font-inter">
                {t("selectanassessment")}
              </p>
              <p className="text-[#475467] text-sm font-medium font-inter">
                {t("whetheryouhaveateam")}
              </p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <div className="icon rounded-full p-3 bg-[#ECF1FD] flex justify-center items-center border-8 border-[#F9F5FF]">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 14.1997L7 16.1997L11.5 11.6997M7 7.19971V4.39971C7 3.2796 7 2.71955 7.21799 2.29173C7.40973 1.9154 7.71569 1.60944 8.09202 1.41769C8.51984 1.19971 9.07989 1.19971 10.2 1.19971H17.8C18.9201 1.19971 19.4802 1.19971 19.908 1.41769C20.2843 1.60944 20.5903 1.9154 20.782 2.29173C21 2.71955 21 3.2796 21 4.39971V11.9997C21 13.1198 21 13.6799 20.782 14.1077C20.5903 14.484 20.2843 14.79 19.908 14.9817C19.4802 15.1997 18.9201 15.1997 17.8 15.1997H15M4.2 21.1997H11.8C12.9201 21.1997 13.4802 21.1997 13.908 20.9817C14.2843 20.79 14.5903 20.484 14.782 20.1077C15 19.6799 15 19.1198 15 17.9997V10.3997C15 9.2796 15 8.71955 14.782 8.29173C14.5903 7.9154 14.2843 7.60944 13.908 7.41769C13.4802 7.19971 12.9201 7.19971 11.8 7.19971H4.2C3.0799 7.19971 2.51984 7.19971 2.09202 7.41769C1.71569 7.60944 1.40973 7.9154 1.21799 8.29173C1 8.71955 1 9.2796 1 10.3997V17.9997C1 19.1198 1 19.6799 1.21799 20.1077C1.40973 20.484 1.71569 20.79 2.09202 20.9817C2.51984 21.1997 3.07989 21.1997 4.2 21.1997Z"
                    stroke="#3855F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#101828] text-lg font-semibold font-inter">
                {t("completeanassessment")}{" "}
              </p>
              <p className="text-[#475467] text-sm font-medium font-inter">
                {t("whetheryouhaveateam")}
              </p>
            </div>
          </div>
          <div className="flex gap-24 ">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <div className="icon rounded-full p-3 bg-[#ECF1FD] flex justify-center items-center border-8 border-[#F9F5FF]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2 13.0002C16.477 13.0002 16.6155 13.0002 16.7278 13.0617C16.8204 13.1124 16.9065 13.2077 16.9478 13.3049C16.9978 13.4227 16.9852 13.5481 16.96 13.7989C16.8296 15.0989 16.3822 16.3516 15.6518 17.4447C14.7727 18.7603 13.5233 19.7857 12.0615 20.3912C10.5997 20.9967 8.99113 21.1551 7.43928 20.8465C5.88743 20.5378 4.46197 19.7758 3.34315 18.657C2.22433 17.5382 1.4624 16.1127 1.15372 14.5609C0.84504 13.009 1.00347 11.4005 1.60897 9.9387C2.21447 8.47689 3.23985 7.22746 4.55544 6.34841C5.64856 5.61801 6.90125 5.17057 8.20131 5.04013C8.45207 5.01497 8.57745 5.00239 8.69528 5.05239C8.79249 5.09363 8.88776 5.17982 8.9385 5.27242C9 5.38467 9 5.52317 9 5.80017V12.2002C9 12.4802 9 12.6202 9.0545 12.7272C9.10244 12.8212 9.17893 12.8977 9.27301 12.9457C9.37996 13.0002 9.51998 13.0002 9.8 13.0002H16.2Z"
                    stroke="#3855F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 1.80017C13 1.52317 13 1.38466 13.0615 1.27241C13.1122 1.17981 13.2075 1.09362 13.3047 1.05238C13.4225 1.00238 13.5479 1.01496 13.7987 1.04011C15.6271 1.22351 17.346 2.03247 18.6569 3.34332C19.9677 4.65416 20.7767 6.37307 20.9601 8.20147C20.9852 8.45224 20.9978 8.57763 20.9478 8.69546C20.9066 8.79266 20.8204 8.88793 20.7278 8.93866C20.6155 9.00017 20.477 9.00017 20.2 9.00017L13.8 9.00017C13.52 9.00017 13.38 9.00017 13.273 8.94567C13.1789 8.89774 13.1024 8.82125 13.0545 8.72717C13 8.62021 13 8.4802 13 8.20017V1.80017Z"
                    stroke="#3855F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#101828] text-lg font-semibold font-inter">
                {t("tractactionablenotes")}
              </p>
              <p className="text-[#475467] text-sm font-medium font-inter">
                {t("whetheryouhaveateam")}
              </p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <div className="icon rounded-full p-3 bg-[#ECF1FD] flex justify-center items-center border-8 border-[#F9F5FF]">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 14V19M17 19L13.0486 15.7072C12.3198 15.0998 11.9554 14.7962 11.5487 14.6801C11.19 14.5778 10.81 14.5778 10.4513 14.6801C10.0446 14.7962 9.68019 15.0998 8.95141 15.7072L5 19M7 9V10M11 7V10M15 5V10M21 1H1M2 1H20V9.2C20 10.8802 20 11.7202 19.673 12.362C19.3854 12.9265 18.9265 13.3854 18.362 13.673C17.7202 14 16.8802 14 15.2 14H6.8C5.11984 14 4.27976 14 3.63803 13.673C3.07354 13.3854 2.6146 12.9265 2.32698 12.362C2 11.7202 2 10.8802 2 9.2V1Z"
                    stroke="#3855F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[#101828] text-lg font-semibold font-inter">
                {t("trackprogress")}
              </p>
              <p className="text-[#475467] text-sm font-medium font-inter">
                {t("whetheryouhaveateam")}
              </p>
            </div>
          </div>
          <Link to="/dashboard/home/new ">
            <button className="py-3 px-6 w-80 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-sm font-medium font-inter">
              {t("startnewassessment")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
