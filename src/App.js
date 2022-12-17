import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/soda" exact>
          <Soda />
        </Route>
        <Route path="/chips" exact>
          <Chips />
        </Route>
        <Route path="/sardines" exact>
          <Sardines />
        </Route>
      </Switch>
    </BrowserRouter>
    // <BrowserRouter>
    //     <Switch>
    //       <Route path="/" exact render={() => <VendingMachine />} />
    //       <Route path="/soda" exact render={() => <Soda />} />
    //       <Route path="/chips" exact render={() => <Chips />} />
    //       <Route path="/sardines" exact render={() => <Sardines />} />
    //     </Switch>
    //   </BrowserRouter>
  );
}

export default App;
