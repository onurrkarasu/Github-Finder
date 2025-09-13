import "./App.css";
import { useEffect, useState } from "react";
import SearchInput from "./Components/SearchInput";
import UserInfo from "./Components/UserInfo";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen p-5 max-w-xl mx-auto">
      <SearchInput setUserData={setUserData} />
      <UserInfo userData={userData} />
    </div>
  );
}

export default App;
