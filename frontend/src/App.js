import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import BackgroundSlider from 'react-background-slider'
import img1 from "./components/lib/background/img1.jpg"
import img2 from "./components/lib/background/img2.jpg"


function App() {
  return (
    <>
    {/* <BackgroundSlider
  images={[img1, img2]}
  duration={10} transition={2} /> */}
      <Navigation />
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
        </Switch>
    </>
  );
}

export default App;