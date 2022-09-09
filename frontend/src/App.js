import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import BusinessShowPage from "./components/BusinessShowPage";


function App() {
  return (
    <>

      <Navigation />
        <Switch>
          <Route path="/business/:businessId" >
            <BusinessShowPage />
          </Route>
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
        </Switch>
    </>
  );
}

export default App;