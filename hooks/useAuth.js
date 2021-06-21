import { useDispatch, useSelector } from "react-redux";
import { $axios } from "../lib/axios";
import { setAuth } from "../redux/features/authSlice";

export default function useAuth() {
  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector((state) => state.auth);

  const login = async (values) => {
    try {
      const listOfTokens = await $axios.post("/ph-auth/login", values);
      dispatch(
        setAuth({
          loggedIn: true,
          user: {
            name: "Zen",
            email: "zen@gmail.com",
          },
        })
      );
      console.log(listOfTokens);
    } catch (error) {
      console.log(error);
    }
  };

  // Logout...

  return { login, loggedIn, user };
}
