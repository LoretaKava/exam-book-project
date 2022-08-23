import Home from ".components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import Login from "./components/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Home />
                <div className="content">
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
