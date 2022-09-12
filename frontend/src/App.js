import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Navigation2 from "./components/Navigation2";
import BusinessShowPage from "./components/BusinessShowPage";
import ReviewForm from "./components/ReviewFormPage";
import Navigation3 from "./components/Navigation3";


function App() {
  return (
    <>
        <Switch>
          <Route exact path="/">
          <Navigation />
          </Route>
          <Route path="/business/:businessId" >
            <Navigation2 />
            <BusinessShowPage />
          </Route>
          <Route path="/review/business/:businessId">
            <Navigation3/>
            <ReviewForm/>
          </Route>
        </Switch>
    </>
  );
}

export default App;