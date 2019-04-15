//https://leetcode.com/problems/longest-substring-without-repeating-characters/

var queryString = "abcabcbb";

var lengthOfLongestSting = () =>  
{
    let [maxLength, maxStartingIndex, floatingStartIndex, subStringLength] = [0,0,0,0];
    debugger;
    for (let floatingEndIndex = 1; floatingEndIndex < queryString.length ; floatingEndIndex++)
    {
        if (queryString.substring(floatingStartIndex,floatingEndIndex).indexOf(queryString[floatingEndIndex]) == -1)
        {
            subStringLength++;
        }
        else
        {
            if (subStringLength > maxLength)
            {
                maxLength = subStringLength;
                maxStartingIndex = floatingStartIndex;
            }
            subStringLength = 0;
            floatingStartIndex = floatingEndIndex;
        }
    }

    console.log (queryString.substr(maxStartingIndex,maxLength+1));
}

lengthOfLongestSting();