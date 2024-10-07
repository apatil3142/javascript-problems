// Question No 3:

// Check if two strings are anagrams or not

// Ex:- 
// 1. s1 = 'anagram', s2 = 'nagaram'
//    output=> true

// 2. s1 = 'rat', s2 = 'car'
//    output => false


const checkIfStringsAreAnagram = (str1, str2) => {
  if(str1.length !== str2.length) return false;

  let mapping = {};
  for(let i = 0; i < str1.length; i++) {
    if(str1[i] in mapping){
      mapping[str1[i]]+=1;
    }else{
      mapping[str1[i]] = 1;
    }
  }

  for(let i = 0; i < str2.length; i++) {
    if(str2[i] in mapping){
      mapping[str1[i]]-=1;
    }else{
      return false;
    }
  }

  for(key in mapping){
    if(mapping[key] > 0){
      return false;
    }
  }

  return true;
}

const output = checkIfStringsAreAnagram('rat', 'tar');

console.log(output)

// Second approach- Using single loop

[1,3,5,6] [1,5,3,6]

const checkIfStringsAreAnagram2 = (str1, str2) => {
  if(str1.length !== str2.length) return false;

  const mapping = {};

  for(let i=0; i<str1.length; i++){
    mapping[str1[i]] = (mapping[str1[i]] || 0) + 1;
    mapping[str2[i]] = (mapping[str2[i]] || 0) - 1;
  }

  return Object.values(mapping).every(item => item === 0);
}

const output1 = checkIfStringsAreAnagram2('anagram', 'nagaram');

console.log(output1)
