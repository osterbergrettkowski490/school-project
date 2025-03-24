function isPalindrome(str) {
  const cleanedStr = str.replace(/\s+|\./g, '').toLowerCase();
  let leftIndex = 0;
  let rightIndex = cleanedStr.length - 1;

  while (leftIndex < rightIndex) {
    if (cleanedStr[leftIndex] !== cleanedStr[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
