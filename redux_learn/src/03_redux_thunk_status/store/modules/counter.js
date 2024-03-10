import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { asyncCount } from "../../api/counter";

const counter = createSlice({
	name: "counter",
	initialState: {
		count: 0,
		satus: "",
	},
	reducers: {
		add(state, { type, payload }) {
			state.count = state.count + payload;
		},
		minus(state, { type, payload }) {
			state.count = state.count - payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addAsyncWithStatus.pending, (state) => {
			state.status = "Loading...";
		});
		builder.addCase(addAsyncWithStatus.fulfilled, (state, action) => {
			state.status = "Loaded!";
			state.count = state.count + action.payload;
		});
		builder.addCase(addAsyncWithStatus.rejected, (state) => {
			state.status = "error!!";
		});
	},
});

const { add, minus } = counter.actions;
const addAsyncWithStatus = createAsyncThunk(
	"counter/asyncCount",
	async (payload) => {
		const response = await asyncCount(payload);
		return response.data;
	}
);

const addAsync = (payload) => {
	return async (dispatch, getState) => {
		const state = getState();
		console.log(state);
		const response = await asyncCount(payload);
		console.log(response);
		dispatch(add(response.data));
	};
};

export { add, minus, addAsync, addAsyncWithStatus };
export default counter.reducer;
