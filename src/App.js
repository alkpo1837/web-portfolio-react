import React from "react";

import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";

function App() {
  return (
    <div className="App">
      <TheHeader />
      <p>Contenu</p>
      <TheFooter />
    </div>
  );
}

export default App;
