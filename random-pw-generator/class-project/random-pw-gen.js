// random chars to be used
const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+1234567890";

function randomIdx(length) {
  return Math.floor(Math.random() * length);
}

function getRandomPassword(length, cs = chars, randomGen = randomIdx) {
  // const clonedChar = chars.split("");
  // let shuffle = "";

  // for (let i = 0; i < length; i++) {
  //   const [char] = clonedChar.splice(randomIdx(clonedChar.length), 1);
  //   shuffle += char;
  // }

  // return shuffle;

  let pw = "";
  // O(8)
  for (let i = 0; i < length; i++) {
    pw += cs[randomGen(cs.length)];
  }
  return pw;
}

// const eight = getRandomPassword(8, randomIdx, chars);
// console.log("eight =", eight);
// const ten = getRandomPassword(10, randomIdx, chars);
// console.log("ten = ", ten);
// const twelve = getRandomPassword(12, randomIdx, chars);
// console.log("twelve =", twelve);

/**
 * @definition make a function that gives random character given a string as a paremter
 * @param {String} chars - string to get random character from
 * @returns single character string
 */
function getRandomChar(chars) {
  // let str = "";
  // for (let i = 0; i < chars.length; i++) {
  //   console.log("i =", i);
  //   if (chars[i] !== " ") str += chars[i];
  // }

  // return str;

  // gettign random number between 0 - (chars.length - 1) and getting chars[on that index]
  const randomChar = chars[Math.floor(Math.random() * chars.length)];
  // check if that random index char is empty string
  if (randomChar === " ") {
    // if it is. return function with same string
    return getRandomChar(chars);
  } else return randomChar;
}

// const randomChar = getRandomChar(
//   "Phil Choi David Jocelin William Mustafa Colby Minnie"
// );
// console.log("randomChar =", randomChar);

// let num = 0;

// function addToNum(num) {
//   console.log("num =", num);
//   // if (num === 5) return console.log("we got to five");
//   return addToNum(num + 1);
// }

// addToNum(num);
