import { useContext } from "react";
import { ContextApi } from "./ApiContext";
function Display() {
  const { state } = useContext(ContextApi);
  // return (
  //   <div>
  //     {state.basket.map((curr) => {
  //       return <h1>curr</h1>;
  //     })}
  //   </div>
  // );
  // if (state.basket.length === 0) {
  //   console.log(state);
  // } else {
  //   state.basket.map((curr) => {
  //     console.log(curr);
  //   });
  // }
  console.log(state.basket.length);
}
export default Display;
