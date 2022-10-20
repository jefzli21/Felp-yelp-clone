import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation2 from "./components/Navigation2";
import BusinessShowPage from "./components/BusinessShowPage";
import ReviewForm from "./components/ReviewFormPage";
import Navigation3 from "./components/Navigation3";
import UserShowPage from "./components/UserShowPage";
import BusinessIndexPage from "./components/BusinessIndexPage";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BusinessCreateForm from "./components/BusinessCreateForm";

function App() {
  
  return (
    <>
        <Switch>
          <Route path="/business/:businessId" >
            <Navigation2 />
            <BusinessShowPage />
            <Footer />
          </Route>
          <Route path="/createbiz" >
            <Navigation2 />
            <BusinessCreateForm />
            <Footer />
          </Route>
          <Route path="/review/business/:businessId">
            <Navigation3/>
            <ReviewForm/>
            <Footer />
          </Route>
          <Route path="/users/:authorId">
          <Navigation2 />
          <UserShowPage />
          <Footer />
          </Route>
          <Route path="/search/:query">
          <Navigation2 />
          <BusinessIndexPage />
          <Footer />
          </Route>
          <Route exact path="/">
          <Home />
          <Footer />
          </Route>
          <Redirect to="/" />
        </Switch>

    </>
  );
}

export default App;