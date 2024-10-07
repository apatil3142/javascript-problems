// =======================================================================

// Question No 5: 

// Find the second largest element inside an array

// const arr = [1,4,6,3,8,9] ==> 8

// =======================================================================

const findSecondLargetElement = (arr) => {
  let maximum = -Infinity;
  let secondMaxiMum = -Infinity;

  for(let i = 0; i<arr.length; i++){
    if(arr[i] > maximum){
      secondMaxiMum = maximum
      maximum = arr[i];
    }else if(arr[i] < maximum && arr[i] >= secondMaxiMum){
      secondMaxiMum = arr[i];
    }
  }

  return secondMaxiMum;
}

const arr = [1,4,6,3,8,9,10,9];

const result = findSecondLargetElement(arr);

console.log(result);