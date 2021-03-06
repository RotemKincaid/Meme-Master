import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
// import Header from "./components/Header/Header";
import CreateGame from "./components/CreateGame/CreateGame";
import CreateUser from "./components/CreateUser/CreateUser";

import Instructions from "./components/Instructions/Instructions";
import Lobby from "./components/Lobby/Lobby";
import PlayerView from "./components/PlayerView/PlayerView";
import JudgeView from "./components/JudgeView/JudgeView";
import Scores from "./components/Scores/Scores";
import WinnerPage from "./components/WinnerPage/WinnerPage";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    {/* <Route path="/header" component={Header} /> */}
    <Route path="/creategame" component={CreateGame} />
   
    <Route path="/createuser" component={CreateUser} />
    <Route path="/instructions" component={Instructions} />
    <Route path="/lobby" component={Lobby} />
    <Route path="/playerview" component={PlayerView} />
    <Route path="/judgeview" component={JudgeView} />
    <Route path="/winner" component={WinnerPage} />
    <Route path="/scores" component={Scores} />
  </Switch>
);
