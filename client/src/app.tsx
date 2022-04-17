import React, { useState, useEffect } from "react";
import { AppRouter } from "./routers/appRouter";

export const App = () => {
  const [state, setState] = useState({ apiResponse: "" });

  useEffect(() => {
    fetch("http://localhost/api/stored")
      .then((res) => res.text())
      .then((res) => setState({ apiResponse: res }));
  }, []);

  return (
    <div>
      <AppRouter />
      {/* <p className="App-intro">;{state.apiResponse}</p>*/}
    </div>
  );
};

export default App;
