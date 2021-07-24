import React from "react";

import "./App.css";
import InboxScreen from "./components/inboxScreen";
import { Provider } from "react-redux";
import { store } from "./lib/redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  );
}

export default App;
