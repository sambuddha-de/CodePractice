let findMines = (bombs, numOfRows, numOfCols) => {
    let minePath = new Array(numOfRows).fill(0).map(() => new Array(numOfCols).fill(0));

    for (let bomb in bombs) {
        minePath[bombs[bomb][0]][bombs[bomb][1]] = -1;

        for (let i = bombs[bomb][0] - 1; i <= bombs[bomb][0] + 1; i++) {
            if (i >= 0 && i < numOfRows) {
                for (let j = bombs[bomb][1] - 1; j <= bombs[bomb][1] + 1; j++) {
                    if (j >= 0 && j < numOfCols) {
                        if (minePath[i][j] != -1)
                            minePath[i][j]++;
                    }
                }
            }
        }
    }
    return minePath;
}

let expandField = (mineField, positionClicked, numOfRows, numOfCols) => {
    let positionToCheck = [];
    positionToCheck.push (positionClicked);
    while (positionToCheck.length > 0)
    {
        let currentLocation = positionToCheck[0];
        for (let i = currentLocation[0] - 1; i <= currentLocation[0] + 1; i++) {
            if (i >= 0 && i < numOfRows) {
                for (let j = currentLocation[1] - 1; j <= currentLocation[1] + 1; j++) {
                    if (j >= 0 && j < numOfCols) {
                        if (mineField[i][j] == 0){
                            mineField[i][j] = -2;
                            positionToCheck.push ([i,j]);
                        }
                    }
                }
            }
        }
        positionToCheck.shift();
    }
}

console.clear();
let mines = findMines([[0, 0],[3,3]], 4, 4);
console.log("Mine Field ");
console.log(mines);

console.log ("After Click");
expandField (mines,[0,3],4,4)
console.log(mines);