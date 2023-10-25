import React from "react";
import Navigation from "./Navigation";
import Provider from "./Components/Provider";

export default function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}
