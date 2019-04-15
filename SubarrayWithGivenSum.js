var arrInputNumbers = [1,2,3,4,5,6,7,8,9,10];
var sumNeeded = 20;

function sumNumbersInArray (startIndex, endIndex)
{
    let sumOfArray = 0;
    for (let i =startIndex; i< endIndex ; i++)
    {
        sumOfArray += arrInputNumbers[i];
    }
    return sumOfArray;
}

function findSubArray ()
{
let startingPos = 0;
let endingPos = 1;
let outputString = "Match not Found";
while (startingPos < endingPos && endingPos <= arrInputNumbers.length)
    {
        let sumOfSubArr = sumNumbersInArray(startingPos,endingPos);
        if (sumOfSubArr == sumNeeded)
        {
            outputString = (startingPos+1) + " " + endingPos;
            break;
        }
        else if (sumOfSubArr<sumNeeded)
            endingPos++;
        else if (sumOfSubArr > sumNeeded)
            startingPos++;
    }
    console.log(outputString);
}

findSubArray();
