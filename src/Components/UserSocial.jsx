import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { RiText } from "react-icons/ri";

const UserSocial = ({ userData }) => {
  return (
    <div className="mt-4 flex flex-col justify-between items-start p-1 border rounded-2xl">
      <div className="flex items-center gap-1 justify-center rounded-2xl p-3">
        <TbWorld className="size-6" />{" "}
        <span>{userData.blog ? userData.blog : "İnternet Sitesi"}</span>
      </div>
      <div className="flex items-center gap-1 justify-center rounded-2xl p-3">
        <FaGithub className="size-6" />{" "}
        <span>{userData.html_url ? userData.html_url : "GitHub Profili"}</span>
      </div>
      <div className="flex items-center gap-1 justify-center rounded-2xl p-3">
        <CiStar className="size-6" />{" "}
        <span>{userData.public_repos ? userData.public_repos : 0}</span>
      </div>
      <div className="flex items-center gap-1 justify-center rounded-2xl p-3">
        <RiText className="size-6" />{" "}
        <span>{userData.type ? userData.type : 0}</span>
      </div>
    </div>
  );
};

export default UserSocial;
