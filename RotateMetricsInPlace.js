let inputArray = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
//let inputArray = [[1, 2, 3, 4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
//let inputArray = [[1, 2, 3],[4,5,6],[7,8,9]];

let rotateArray = () => {
    let sizeOfArray = inputArray.length;

    for (let i = 0; i < Math.ceil(sizeOfArray / 2); i++) {
        for (let j = i; j < sizeOfArray - 1 - i; j++) {
            arrayOfNewCoordinates = new Array();
            findNewCoOrdinates(i, j, sizeOfArray, 4);

            let tempStorage = inputArray[i][j];
            inputArray[i][j] = inputArray[arrayOfNewCoordinates[2][0]][arrayOfNewCoordinates[2][1]];
            inputArray[arrayOfNewCoordinates[2][0]][arrayOfNewCoordinates[2][1]] = inputArray[arrayOfNewCoordinates[1][0]][arrayOfNewCoordinates[1][1]];
            inputArray[arrayOfNewCoordinates[1][0]][arrayOfNewCoordinates[1][1]] = inputArray[arrayOfNewCoordinates[0][0]][arrayOfNewCoordinates[0][1]];
            inputArray[arrayOfNewCoordinates[0][0]][arrayOfNewCoordinates[0][1]] = tempStorage;
        }
    }
    console.log(inputArray);
}

let arrayOfNewCoordinates = new Array();

let findNewCoOrdinates = (pointX, pointY, sizeOfArray, countSides) => {
    let newPointX = pointY;
    let newPointY = sizeOfArray - 1 - pointX;
    arrayOfNewCoordinates.push([newPointX, newPointY]);

    if (countSides > 1) {
        countSides--;
        findNewCoOrdinates(newPointX, newPointY, sizeOfArray, countSides)
    }
}

console.clear();
rotateArray();