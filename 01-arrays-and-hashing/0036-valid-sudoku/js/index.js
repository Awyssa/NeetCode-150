const isValidSudoku = (board) => {
	const rows = new Set();
	const cols = new Set();
	const boxes = new Set();

	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			const val = board[row][col];
			if (val === ".")
				continue;

			const rowKey = row + "r" + val;
			const colKey = col + "c" + val;
			const boxKey = Math.floor(row / 3) + "b" + Math.floor(col/ 3) + "b" + val;

			if (rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey))
				return false;

			rows.add(rowKey);
			cols.add(colKey);
			boxes.add(boxKey);
		}
	}

	return true;
};

module.exports = { isValidSudoku };