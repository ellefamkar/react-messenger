import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />  
        <Route path="/" component={Login} />  
      </Switch>     
    </>
  );
}

export default App;
