import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActionCreators from "../store/action-creators/product";
import * as cartActionCreators from "../store/action-creators/cart";
import * as authActionCreators from "../store/action-creators/auth";

export const useProductActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(productActionCreators, dispatch);
};
export const useCartActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(cartActionCreators, dispatch);
};
export const useAuthActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(authActionCreators, dispatch);
};
