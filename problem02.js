// Question No 2:

// Given an array having split value, split array having elements equal to split value & rest of the elements as separate value. 

// Ex:- 
// const arr = [2, 4, 5, 6, 7, 3, 6, 8] and splitValue = 3
// output = [[2, 4, 5], [6, 7, 3], [6, 8]]

// const arr = [2, 4, 5, 6, 7, 3, 6, ,8] and splitValue = 2
// output = [[2, 4], [5, 6], [7, 3], [6, 8]]


const splitArray = (arr, value) => {
  let finalArray = [];
  let currentArray = [];

  for(let i=0; i<arr.length; i++){
  
    if(currentArray.length === value){
      finalArray.push(currentArray);
      currentArray = [];
      currentArray.push(arr[i]);
    }else{
      currentArray.push(arr[i]);
    }

  }

  if(currentArray.length !== 0){
    finalArray.push(currentArray);
  }

  return finalArray;
};

const output = splitArray([2, 4, 5, 6, 7, 3, 6, 8], 3);

console.log(output);
