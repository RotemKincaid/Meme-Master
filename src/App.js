import React from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
// import Header from "./components/Header/Header";
import "./App.css";

function App(props) {
  // console.log(props.history.location)
  // const { pathname } = props.location;

  return (
    <div className="App">
      {/* this will avoid showing the header when on the landing page, it will be commented out until we are ready */}

      {/* {pathname !== '/' ? (

      <div><Header/></div>
      ):(
      <div></div>
      )} */}

      {/* <Header /> */}

      {routes}
    </div>
  );
}

export default withRouter(App);
