import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const $axios = axios.create({
  baseURL: "http://192.168.1.11:5000/api",
  timeout: 5000,
  withCredentials: true,
});

const getNewToken = async () => {
  try {
    // RefreshToken...?
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    if (refreshToken) {
      const { accessToken } = await $axios.post("/ph-auth/refresh", {
        refreshToken,
      });

      return accessToken;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

$axios.interceptors.request.use(async (config) => {
  // If we have accessToken in asyncstorage use that for all requests....
  const accessToken = await AsyncStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

$axios.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  async (error) => {
    if (error.response) {
      const { status, config } = error.response;
      const originalRequest = config;
      // If token has expired, we get back 403....
      if (status === 403) {
        const accessToken = await getNewToken();
        if (accessToken) {
          console.log("Token refreshed");
          await AsyncStorage.setItem("accessToken", accessToken);
          return $axios(originalRequest);
        }
      }
    }
    return Promise.reject(error);
  }
);
