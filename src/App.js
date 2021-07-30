import { Switch, Route } from "react-router-dom";
import ChangePassword from "./pages/ChangePassword";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path ='/' component={ Login } />
        <Route exact path ='/profile' component={ Profile } />
        <Route exact path ='/changePassword' component={ ChangePassword } />
        <Route exact path ='/register' component={ Register } />
      </Switch>
    </div>
  );
}

export default App;
