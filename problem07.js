// =======================================================================

// Question No 7: 

// Remove duplicates from array;

// const arr = [1, 3, 5, 2, 3, 2, 4] ==> [1, 3, 5, 2]

// =======================================================================

const removeDuplicates = (arr) => {
  if(arr.length === 0) return [];
  let map = {};
  let result = [];

  for(let i = 0; i<arr.length; i++){
    if(map[arr[i]] === undefined){
      map[arr[i]]=1;
      result.push(arr[i]);
    }
  }
  
  return result;
}

const result = removeDuplicates([1, 3, 5, 2, 3, 2, 4]);

console.log(result);