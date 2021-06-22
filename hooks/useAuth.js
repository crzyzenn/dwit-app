import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { $axios } from "../lib/axios";
import { setAuth } from "../redux/features/authSlice";

// Just a normal function that returns something
// Custom hooks ability -> they can use react hooks inside of them...
export default function useAuth() {
  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const mounted = useRef(false);

  useEffect(() => {
    // If component mounts....
    mounted.current = true;

    // Cleanup function...
    return () => {
      // When component unmounts...
      mounted.current = false;
    };
  }, []);

  const login = async (values) => {
    mounted.current && setLoading(true);
    try {
      const { accessToken, refreshToken } = await $axios.post(
        "/ph-auth/login",
        values
      );

      await AsyncStorage.setItem("accessToken", accessToken);
      await AsyncStorage.setItem("refreshToken", refreshToken);

      // Fetch the user....
      const user = await $axios.get("/ph-auth/user");

      dispatch(
        setAuth({
          loggedIn: true,
          user,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      mounted.current && setLoading(false);
    }
  };

  // Logout...
  const logout = async () => {
    try {
      mounted.current && setLoading(true);
      // Logout ????
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      // api----- logout
      await $axios.post("/ph-auth/logout", { refreshToken });

      // After that, clear the asyncstorage...
      await AsyncStorage.multiRemove(["refreshToken", "accessToken"]);

      // Logout from app...
      dispatch(
        setAuth({
          loggedIn: false,
          user: null,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      mounted.current && setLoading(false);
    }
  };

  return { login, loggedIn, user, logout, loading };
}
