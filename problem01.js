// Question No 1:
`
Problem to reverse string and reverse individual substring in JS
const input1 = "Hello World" ===> output: "olleH dlroW"
const input2 = "Mr Ding" ===> output: "rM gniD"
`

const reverseStrings = (str) => {
  let output = '';
  for(let i=0;i<str.length;i++){
    output = str[i] + output;
  }
  return output;
}

const reverseSubStrings = (sentense) => {
  let res = '';
  const splittedArray = sentense.split(' ');
  for(let i=0; i<splittedArray.length;i++){
    res+=reverseStrings(splittedArray[i]) + " ";
  }

  return res.trim();
};

const output = reverseSubStrings("Hello World");

console.log(output);