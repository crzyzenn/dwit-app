// Just a normal function that returns something
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDark } from "../redux/features/authSlice";

// Custom hooks ability -> they can use react hooks inside of them...
export default function useDarkMode() {
  const dark = useSelector((state) => state.auth.dark);
  const dispatch = useDispatch();
  const setDarkMode = (val) => dispatch(setDark(val));

  return { dark, setDarkMode };
}
