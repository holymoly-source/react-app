import "./Style.css";
import Items from "./components/Items";
import Display from "./components/Display";
import "./App.css";
import { ContextApi, initialState } from "./components/ApiContext";
import { useReducer } from "react";
import reducer from "./components/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextApi.Provider value={{ state, dispatch }}>
      <div className="App">
        <Items />
        <Display />
      </div>
    </ContextApi.Provider>
  );
}
export default App;
