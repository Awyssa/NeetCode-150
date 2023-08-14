const isValidSudoku = (board) => {    
	const rows = new Set();
	const cols = new Set();
	const boxes = new Set();
  
	for(let row = 0; row < 9; row++) {
		for(let col = 0; col < 9; col++) {
			const val = board[row][col];
			if(val === ".")
				continue;

			const rowKey = row + "r" + val;
			const colKey = col + "c" + val;
			const boxKey = Math.floor(row / 3) + "b" + Math.floor(col/ 3) + "b" + val;

			console.log("rowKey ===", rowKey);
			console.log("colKey ===", colKey);
			console.log("boxKey ===", boxKey);

			if(rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey)) 
				return false;

			rows.add(rowKey);
			cols.add(colKey);
			boxes.add(boxKey);
		}
	}

	console.log("rows ===", rows);
	console.log("cols ===", cols);
	console.log("boxes ===", boxes);

	return true;
};

const board = [
	[".","8","7","6","5","4","3","2","1"],
	["2",".",".",".",".",".",".",".","."],
	["3",".",".",".",".",".",".",".","."],
	["4",".",".",".",".",".",".",".","."],
	["5",".",".",".",".",".",".",".","."],
	["6",".",".",".",".",".",".",".","."],
	["7",".",".",".",".",".",".",".","."],
	["8",".",".",".",".",".",".",".","."],
	["9",".",".",".",".",".",".",".","."]
];

const value = isValidSudoku(board);
console.log("value ===", value);