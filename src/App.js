import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./Components/Header/Header.js";
import AutoList from "./Components/AutoList/AutoList.js";
import Footer from "./Components/Footer/Footer.js";

import { initAuto } from "./ducks/actions/AutoAction.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuto());
  }, [dispatch]);

  return (
    <>
      <Header />
      <AutoList />
      <Footer />
    </>
  );
};

export default App;
