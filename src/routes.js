import Home from "./pages/home";
import CssTest from "./pages/css-test";
import JsTest from "./pages/js-test";
import { Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Routes() {
  return (
    <div style={{ margin: "4px" }}>
      <Router>
        <Link to="/css_test">
          <Button>CSS Test</Button>
        </Link>{" "}
        <Link to="/js_test">
          <Button>JS Test</Button>
        </Link>{" "}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/css_test">
            <CssTest />
          </Route>
          <Route path="/js_test">
            <JsTest />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
