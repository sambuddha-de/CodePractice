let sampleArray = [3, 3, 1, 3, 2, ];

let findFrequentElement = () =>
{
    let arrayHashmap = {};
    let maxNumber = 0; 
    let maxCount = 0;

    for (numbers in sampleArray)
    {
        (arrayHashmap[sampleArray[numbers]] == undefined) ? arrayHashmap[sampleArray[numbers]] = 1 : arrayHashmap[sampleArray[numbers]]++;

        if (maxCount < arrayHashmap[sampleArray[numbers]])
        {
            maxCount = arrayHashmap[sampleArray[numbers]];
            maxNumber = sampleArray[numbers];
        }
    }

    console.clear();
    console.log (`Frequent element is ${maxNumber} with ${maxCount}`);
}

findFrequentElement();