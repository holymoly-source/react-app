import { Products } from "./Products";
import "./design.css";
import { ContextApi } from "./ApiContext";
import { useContext } from "react";
function Items() {
  const { dispatch } = useContext(ContextApi);
  return (
    <div>
      {Products.map((curr) => {
        return (
          <div className="box">
            <h1>{curr.id}</h1>
            <h1>{curr.name}</h1>
            <h2>{curr.location}</h2>
            <button
              onClick={() => dispatch({ type: "ADD_ME", payload: curr.id })}
            >
              CLICK
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Items;
