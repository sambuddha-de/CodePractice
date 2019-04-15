var arrInputNumbers = [4,3,1,1,1,1];

function sumNumbersInArray (startIndex, endIndex)
{
    let sumOfArray = 0;
    for (let i =startIndex; i< endIndex ; i++)
    {
        sumOfArray += arrInputNumbers[i];
    }
    return sumOfArray;
}

findEquib = function()
{
    let equibriumPoint =  Math.ceil(arrInputNumbers.length / 2) - 1;
    let lastEquibPoint = equibriumPoint;
    let outputText = "Equilibrium Not Found";

    while (equibriumPoint > 0 && equibriumPoint < arrInputNumbers.length)
    {
        let sumOfLeftHalf = sumNumbersInArray(0,equibriumPoint);
        let sumOfRightHalf = sumNumbersInArray (equibriumPoint+1, arrInputNumbers.length);
        if (sumOfLeftHalf == sumOfRightHalf)
        {
            outputText = `Equibrium found at ${equibriumPoint + 1} element - ${arrInputNumbers[equibriumPoint]}`;
            break;
        }
        else if (sumOfLeftHalf < sumOfRightHalf)
            equibriumPoint++;
        else
            equibriumPoint--;

        if (lastEquibPoint == equibriumPoint)
            break;
        
    }

    console.log (outputText);
}

findEquib();