import React from "react";
import UserText from "./UserText";
import UserLocation from "./UserLocation";
import UserSocial from "./UserSocial";




const UserInfo = ({userData}) => {
  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <UserText userData={userData} />
      <UserLocation userData={userData} />
      <UserSocial userData={userData} />
    </div>
  );
};

export default UserInfo;
