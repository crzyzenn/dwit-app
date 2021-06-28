import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  calculateTotal,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../redux/features/cartSlice";

// Just a normal function that returns something
// Custom hooks ability -> they can use react hooks inside of them...
export default function useCart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const addToCart = (item) => dispatch(add(item));
  const removeFromCart = (id) => dispatch(removeItem(id));
  const plusItem = (id) => dispatch(incrementQuantity(id));
  const minusItem = (id) => dispatch(decrementQuantity(id));

  useEffect(() => {
    dispatch(calculateTotal());
    // Save the changed items to asyncStorage
  }, [items]);

  return { addToCart, items, totalPrice, removeFromCart, plusItem, minusItem };
}
