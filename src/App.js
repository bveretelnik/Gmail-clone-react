import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";
import SendMail from "./components/Mail/SendMail/SendMail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <SideBar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
