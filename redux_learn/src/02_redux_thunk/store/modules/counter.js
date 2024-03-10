import { createSlice } from "@reduxjs/toolkit";
import { asyncCount } from "../../api/counter";

const counter = createSlice({
	name: "counter",
	initialState: {
		count: 0,
	},
	reducers: {
		add(state, { type, payload }) {
			state.count = state.count + payload;
		},
		minus(state, { type, payload }) {
			state.count = state.count - payload;
		},
	},
});

const { add, minus } = counter.actions;

const addAsync = (payload) => {
	return async (dispatch, getState) => {
		const state = getState();
		console.log(state);
		const response = await asyncCount(payload);
		console.log(response);
		dispatch(add(response.data));
	};
};

export { add, minus, addAsync };
export default counter.reducer;
