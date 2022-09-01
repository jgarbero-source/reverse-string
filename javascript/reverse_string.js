function reverseString(str) {
  let arr = str.split('')
  let revArr = arr.reverse()
  let revStr = revArr.join('')
  return revStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//take the string and turn it into an array (split)
//reverse the array
//turn the array into a string (join?)
