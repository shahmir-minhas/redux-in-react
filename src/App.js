import logo from "./logo.svg";
import "./App.css";
import Cake from "./components/Cake";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CakeHooks from "./components/CakeHooks";
import IceCream from "./components/IceCream";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cake />
        <hr />
        <CakeHooks />
        <hr />
        <IceCream />
      </Provider>
    </div>
  );
}

export default App;
