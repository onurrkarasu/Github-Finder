import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const UserLocation = ({ userData }) => {
  return (
    <div className="mt-4 text-xs flex md:text-base justify-between items-center p-1 border rounded-2xl">
      <div className="flex items-center gap-1 justify-center rounded-2xl p-3">
        <MdOutlineLocationOn className="size-6" />
        <span>{userData.location ? userData.location : "Bilinmiyor"}</span>
      </div>
      <div className="flex items-center gap-1 justify-center rounded-2xl p-3">
        <FaRegUser className="size-6" />
        <span>{userData.company ? userData.company : "@Company"}</span>
      </div>
      <div className="flex items-center gap-1 justify-center rounded-2xl p-3">
        <CiCircleList className="size-6" />{" "}
        <span>{userData.followers ? userData.followers : 0}</span>
      </div>
      <div className="flex items-center gap-1 justify-center rounded-2xl p-3">
        <CiCirclePlus className="size-6" />{" "}
        <span>{userData.following ? userData.following : 0}</span>
      </div>
    </div>
  );
};

export default UserLocation;
