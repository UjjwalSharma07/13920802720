import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AllTrainsPage from "./pages/AllTrainPage/AllTrainsPage";
import SingleTrainPage from "./pages/SingleTrainPage/SingleTrainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={AllTrainsPage} />
        <Route exact path="/train/:trainId" component={SingleTrainPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
