import { Products } from "./Products";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ME":
      Products.map((curr) => {
        if (curr.id === action.payload) {
          state.basket = [...state.basket, curr];
          return state;
        }
      });
      console.log(state);
  }
};
export default reducer;
