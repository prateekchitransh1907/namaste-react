import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("offline");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("offline");
      setOnlineStatus(true);
    });
  }, []);
  console.log(onlineStatus);
  return onlineStatus;
};

export default useOnlineStatus;
