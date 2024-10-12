import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Detail from  "./route/Detail";
import Home from "./component/Home"

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/movie/:id">
                  <Detail />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
  )
}

export default App;
