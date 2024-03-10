//immer検証用　ミュータブルな変数をイミュータブルなものとして扱うことができる
import { produce } from "immer";

const state = {
	name: "tom",
	hobbies: ["tennis", "soccer"],
};
const newState = produce(state, (draft) => {
	draft.name = "john";
	draft.hobbies[0] = "baseball";
	console.log(draft);

	//ミュータブルな処理を行う場合はreturnしない（エラーとなる）
});

console.log(state, newState);
console.log(state === newState); //false
