import React, { useState } from "react";

const SearchInput = ({setUserData}) => {
  const [username, setUsername] = useState("");

  const handleChangeInput = (data) => {
    if (data === "") return;
    setUsername(data);
  };

  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  return (
    <div className="w-full mt-32 shadow-2xl bg-white rounded-2xl flex">
      <input
        type="text"
        className="p-5 rounded-l-2xl outline-none border-none w-full placeholder:italic"
        placeholder="Github UserName Enter..."
        onChange={(e) => handleChangeInput(e.target.value)}
      />
      <button
        onClick={getUserData}
        className="p-5 rounded-r-2xl border-l bg-green-300 text-white"
      >
        Ara
      </button>
    </div>
  );
};

export default SearchInput;
