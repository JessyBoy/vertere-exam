import React from "react";
import { Switch, Route } from "react-router-dom";
import ImageList from "./features/ImageList";

function App() {
  return (
    <Switch>
      <Route path="/" component={ImageList} />
    </Switch>
  );
}

export default App;
