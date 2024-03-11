//基本の書き方
// const reduxmiddleware = (store) => {
//     return (next) => {
//         return (action) => {
//    すべてのdispatchで行われる処理
//　　storeはaction前の状態
//      (store.getState()でステートを取得する)
//             next(action)
//          storeはaction後の状態
//         }
//     }
// }

const logger = (store) => {
	return (next) => {
		return (action) => {
			console.log("before", action, store.getState());
			next(action);
			console.log("after", action, store.getState());
		};
	};
};

export default logger;
