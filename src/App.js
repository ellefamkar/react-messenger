import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

// components 
import Login from "./components/Login";
import Chats from "./components/Chats";

// context 
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Switch>
          <Route path="/login" component={Login} />  
          <Route path="/chats" component={Chats} />  
        </Switch>
    </AuthContextProvider>     
    </>
  );
}

export default App;
