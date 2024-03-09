import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

function App() {
	return (
		<>
			<Provider store={store}>
				<Counter></Counter>
			</Provider>
		</>
	);
}

export default App;
