// https://practice.geeksforgeeks.org/problems/champagne-overflow/0

  let overflowUnit = (checkElement, checkLevel) => 
  {
    counter++;
        if (checkElement == 0)
        {
            return 0;
        }

        if (checkLevel == 1)
        {
            return (numberOfWaterUnits - 1);
        }

        return calculateAmountOverflow (overflowUnit(findLeftContributors(checkElement,checkLevel-1), checkLevel-1),overflowUnit(findRightContributors(checkElement,checkLevel-1),checkLevel-1));
  }

  let findLeftContributors = (element, level) =>
  {
      return (element == 1)? 0 : element -1;
  }

  let findRightContributors = (element, level) =>
  {
      return (element > level) ? 0: element;
  }

  let calculateAmountOverflow = (leftWaterUnits, rightWaterUnits) =>
  {
    let amountOverflow = (leftWaterUnits - 1) / 2 + (rightWaterUnits -1) / 2;
    return (amountOverflow > 0) ? amountOverflow : 0;
  }

  let numberOfWaterUnits = 15;
  let depthOfPyramid = 5;
  let testCup = 2;
  let testDepth = 5;

  let totalWaterInTheTestCup = overflowUnit(findLeftContributors(testCup,testDepth),testDepth-1) / 2 + overflowUnit(findRightContributors(testCup,testDepth),testDepth-1) / 2;
  let waterOverflowedFromCup = (totalWaterInTheTestCup - 1 > 0) ? totalWaterInTheTestCup - 1 : 0;
  let waterRemainsInTheCup = (totalWaterInTheTestCup > 1) ? 1 : totalWaterInTheTestCup;
  console.log (`Water Remaining in the Cup: ${waterRemainsInTheCup} and water Overflow: ${waterOverflowedFromCup}`);
  console.log (memoArray);