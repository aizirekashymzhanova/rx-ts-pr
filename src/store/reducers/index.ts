import { cartReducer } from "./cartReducer";
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
