import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Cake from "./components/Cake";
import CakeHooks from "./components/CakeHooks";
import IceCream from "./components/IceCream";
import NewCake from "./components/NewCake";
import Users from "./components/User";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cake />
        <hr />
        <CakeHooks />
        <hr />
        <IceCream />
        <hr />
        <NewCake />
        <br />
        <br />
        <Users />
        <br />
        <br />
      </Provider>
    </div>
  );
}

export default App;
