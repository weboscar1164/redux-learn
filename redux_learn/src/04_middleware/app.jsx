import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import "./App.css";
// redux-thunkの定義
// const thunkFunction = (payload) => {
// 	return (dispatch, getState) => {
// 		副作用処理を記載
// 	};
// };
const app = () => {
	return (
		<>
			<Provider store={store}>
				<Counter></Counter>
			</Provider>
		</>
	);
};

export default app;
