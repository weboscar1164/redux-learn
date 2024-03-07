import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Provider></Provider>
		</>
	);
}

export default App;
