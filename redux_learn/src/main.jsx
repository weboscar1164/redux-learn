import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./01_redux_basic/App.jsx";
// import App from "./02_redux_thunk/app";
import App from "./03_redux_thunk_status/app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
