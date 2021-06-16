import React from "react";
import Hobby from "./components/Hobby";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="app">
      <Users />
      <Hobby />
    </div>
  );
};

export default App;
