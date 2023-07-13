import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Login from "./components/Login";
import Chats from "./components/Chats";

// context 
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Switch>
          <Route path="/chats" component={Chats} />  
          <Route path="/login" component={Login} />  
          <Route path="/" component={Login} />  
        </Switch>
    </AuthContextProvider>     
    </>
  );
}

export default App;
