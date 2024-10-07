// =======================================================================

// Question No 6: 

// Find longest common prefix amongst the array of strings

// const arr = ["Flowers", "Flow", "Flight"] ==> "Fl"

// =======================================================================

const longestCommonPrefix = (arr) => {
  if(arr.length === 0) return '';
  let result = '';
  for(let i=0;i<arr[0].length;i++){
    let currentChar = arr[0][i];
    let isEqual = true;
    for(let j=0; j<arr.length;j++){
      if(arr[j][i] !== currentChar){
        isEqual = false;
        break;
      }
    }
    if(isEqual){
      result+=currentChar;
    }else{
      break;
    }
  }
  return result;
};

const result = longestCommonPrefix(["Flowers", "Flow", "F"]);

console.log(result);