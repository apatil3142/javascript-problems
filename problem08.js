// =======================================================================

// Question No 8: 

// Move all zeros to the end of the array;

// const arr = [1, 0, 5, 0, 3, 2] ==> [1,5,3,2,0,0];

// =======================================================================

const moveZerosToEnd = (arr) => {
  let i = 0;
  let j = 0;
  while(i<arr.length && j<arr.length){
    if(arr[i] !== 0){
      i++;
      j++;
    }else if(arr[j]!==0){
      arr[i] = arr[j];
      arr[j] = 0;
      i++;
    }else{
      j++;
    }
  }
  return arr;
};

const result = moveZerosToEnd([4,0,0,0,7]);

console.log(result);