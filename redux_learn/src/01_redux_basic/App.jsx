import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import "./immer";

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
