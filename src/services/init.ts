import WebApp from "@twa-dev/sdk";
export const BASE_URL = "https://api.godoo.asia/hr";
export const TOKEN = WebApp.initData === "" ? "test_token" : WebApp.initData;

const fetchIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org");
    if (!response.ok) {
      return "";
    }
    const data = await response.text();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return "";
  }
};
export const IP_ADDRESS = await fetchIPAddress();
