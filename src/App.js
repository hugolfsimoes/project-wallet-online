import { Switch, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import ChangePassword from "./pages/ChangePassword";
import Deposits from "./pages/Deposits";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Spendings from "./pages/Spendings";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/changePassword" component={ChangePassword} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/deposits" component={Deposits} />
        <Route exact path="/spendings" component={Spendings} />
      </Switch>
    </div>
  );
}

export default App;
