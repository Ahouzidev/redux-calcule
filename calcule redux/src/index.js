import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import { Provider } from "react-redux";
import store from "./compcalcul/store";
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(

<Provider store={store}>
<App />
</Provider>


);

// If you want your app to work offline and load faster, you can change

