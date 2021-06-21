import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { $axios } from "../lib/axios";
import { setAuth, toggleDark } from "../redux/features/authSlice";

export default function useAuth() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { loggedIn, user, dark } = useSelector((state) => state.auth);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    checkIfUserExists();
    return () => (mounted.current = false);
  }, []);

  // check if the user exists...
  const checkIfUserExists = async () => {
    try {
      mounted.current && setLoading(true);
      const accessToken = await AsyncStorage.getItem("accessToken");
      if (accessToken) {
        const user = await $axios.get("/ph-auth/user");

        dispatch(
          setAuth({
            loggedIn: true,
            user,
          })
        );
      }
    } catch (error) {
      dispatch(
        setAuth({
          loggedIn: false,
          user: null,
        })
      );
    } finally {
      mounted.current && setLoading(false);
    }
  };

  const login = async (values) => {
    try {
      mounted.current && setLoading(true);

      const { access, refresh } = await $axios.post("/ph-auth/login", values);
      await AsyncStorage.setItem("accessToken", access);
      await AsyncStorage.setItem("refreshToken", refresh);

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

  const logout = async () => {
    try {
      mounted.current && setLoading(true);
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      await $axios.post("/ph-auth/logout", {
        refreshToken,
      });

      // clear the localstorage
      await AsyncStorage.multiRemove(["accessToken", "refreshToken"]);

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

  const toggleDarkMode = () => {
    dispatch(toggleDark());
  };

  return { login, loggedIn, user, logout, loading, dark, toggleDarkMode };
}
