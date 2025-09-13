import React, { use } from "react";

const UserText = ({ userData }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between sm:justify-around md:justify-start">
      <div className="w-32 h-32">
        <img
          src={
            userData.avatar_url
              ? userData.avatar_url
              : "https://placehold.co/200x200"
          }
          className="w-full h-full rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full md:w-8/12">
        <h2 className="text-2xl font-bold">
          {userData.name ? userData.name : "Adınız Soyadınız"}
        </h2>
        <span className="text-xs italic font-semibold">
          {userData.login ? userData.login : "@kullaniciAdi"}
        </span>
        <p className="text-sm mt-2">
          {userData.bio
            ? userData.bio
            : " Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>
      </div>
    </div>
  );
};

export default UserText;
