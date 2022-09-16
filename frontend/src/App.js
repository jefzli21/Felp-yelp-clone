import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Navigation2 from "./components/Navigation2";
import BusinessShowPage from "./components/BusinessShowPage";
import ReviewForm from "./components/ReviewFormPage";
import Navigation3 from "./components/Navigation3";
import UserShowPage from "./components/UserShowPage";
import BusinessIndexPage from "./components/BusinessIndexPage";
import Home from "./components/Home";

function App() {
  
  return (
    <>
        <Switch>
          <Route path="/business/:businessId" >
            <Navigation2 />
            <BusinessShowPage />
          </Route>
          <Route path="/review/business/:businessId">
            <Navigation3/>
            <ReviewForm/>
          </Route>
          <Route path="/users/:authorId">
          <Navigation2 />
          <UserShowPage />
          </Route>
          <Route path="/search/:query">
          <Navigation2 />
          <BusinessIndexPage />
          </Route>
          <Route exact path="/">
          <Home />
          </Route>
          <Redirect to="/" />

        </Switch>
    </>
  );
}

export default App;