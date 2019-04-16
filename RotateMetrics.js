let inputArray = [[1, 2, 3, 4, 5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
//let inputArray = [[1, 2, 3, 4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

let rotateArray = () =>{
    let sizeOfArray = inputArray.length;
    let rotatedArray = new Array (sizeOfArray).fill(0).map(()=> new Array (sizeOfArray).fill(0));
    for (let i in inputArray)
    {
        for (j in inputArray[i])
        {
            let newCoordinates = findNewCoOrdinates(i,j,sizeOfArray);
            rotatedArray[newCoordinates[0]][newCoordinates[1]] = inputArray[i][j];
        }
    }
    console.log (rotatedArray);
}

let findNewCoOrdinates =(pointX, pointY, sizeOfArray) => {
    let newPointX = pointY;
    let newPointY = sizeOfArray - 1 - pointX;
    return [newPointX,newPointY];
}
console.clear();
rotateArray();