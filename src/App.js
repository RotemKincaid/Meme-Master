import React from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default withRouter(App);
