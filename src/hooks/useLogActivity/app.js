import React, { useCallback } from "react";
import axios from "axios";

function useLogActivity() {
  const logActivity = useCallback(async (message) => {
    try {
      await axios.post("http://localhost:9001/log", {
        activity: message,
      });
      console.log("Activity logged!");
    } catch (error) {
      console.log("Error Loggin activity", error);
    }
  },[]);
    return logActivity
}

export default useLogActivity;
