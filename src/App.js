import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";
import Home from "./Home/Home";

const store = createStore(reducers);
class App extends Component {
  render() {
    return (
      <div className="body">
        <Provider store={store}>
          <img
            src={require("./images/headerImage.jpg")}
            alt="header"
            className="headerImage"
          />
          <div className="fruitHeader" id="fruitId">
            Fresh Fruits
          </div>
          <Home />
        </Provider>
      </div>
    );
  }
}
export default App;
