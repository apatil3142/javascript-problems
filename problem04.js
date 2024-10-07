// =======================================================================

// Question No 4: 

// Find the first unique charcter in a string

// const str1 = 'leetcode' ==> 'l'

// const str2 = 'loveleetcode' ==> 'v'

// =======================================================================


const findFirstUniqueChar = (str) => {
  const map = {};

  for(let i = 0; i<str.length; i++){
    if(map[str[i]]){
      map[str[i]]+=1;
      
    }else{
      map[str[i]]=1;
    }
  }

  for(let key in map){
    if(map[key] === 1) return key;
  }
  return 'Not Found';
};

const result = findFirstUniqueChar('leetcode');

console.log(result);