// 擬似的な非同期処理
const asyncCount = (count = 1) => {
	return new Promise((resolve) =>
		setTimeout(() => resolve({ data: count }), Math.random() * 1000)
	);
};

export { asyncCount };
