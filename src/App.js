import {Switch, Route, Redirect } from 'react-router-dom'
import { Home } from "./Home";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
function App() {
  return (
    <div className="m-auto app-div" >
    <Switch>
      <Route exact path={["/","/home"]} component={Home}></Route>
      <Route exact path="/skills" component={Skills}></Route>
      <Route exact path="/experience" component={Experience}></Route>
    </Switch>
    </div>
  );
}

export default App;
