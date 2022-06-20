//111-152
//input - single letter - upper case
//output is a string
//1, 3, 5, 7 lengths of letters
//total length of each row is -  

//13579
//ABCDEFGHIJKLMNOPQRSTUVWXYZ

//get index of input letter 
//largestwidth is index + (1 + index)

//declare a var and init to array
//iterate over alphabet until char is input char
  //if current char is A
    //declare  var and init to 'A'
    //declrea a var - padding - take total width subtract 1 and divide by 2
    //padstart 'A' and pad end with 
    //push string to array
  //else 
    //let lengthOfLetters = index + index + 1
    //take current letter 'B' padd end with length of letters - 2
    //pad letters with (largestwidth - length of letters) divide by 2

//copy array of letters
//pop last element, reverse copy, concat to original array
//join array by '\n'



class Diamond {
  static makeDiamond(letter) {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let charIdx = ALPHABET.indexOf(letter) 
    let width = charIdx + (1 + charIdx); 

    let lines = [];
    for (let idx = 0; idx <= charIdx; idx += 1) {
      let currentChar = ALPHABET[idx];
      if (currentChar === 'A') {
        let line = 'A';
        let paddingLen = (width - 1) / 2;
        let padding = ' '.repeat(paddingLen);
        line = padding + line + padding + '\n';
        lines.push(line);
      } else {
        let letterLen = idx + idx + 1;
        let innerPadding = ' '.repeat(letterLen - 2);
        let line = currentChar + innerPadding + currentChar;
        let outerPaddingLen = (width - letterLen) / 2;
        let outerPadding = ' '.repeat(outerPaddingLen);
        line = outerPadding + line + outerPadding + '\n';
        lines.push(line);
      }
    }

    if (letter !== 'A') {
      let linesCopy = lines.slice();
      linesCopy.pop();
      linesCopy.reverse()
      lines = lines.concat(linesCopy);
    }
    return lines.join('');
  }
}


// console.log(Diamond.makeDiamond('A'));
// console.log(Diamond.makeDiamond('B'));
// console.log(Diamond.makeDiamond('P'));

module.exports = Diamond;

/*
PM Notes:
- in the beginning. look at the expected values 
from the tests very carefully
- You want to make sure you are coding for
the right output
- create some console.log of your output like
above. It is hard to read the results of the 
tests sometimes.
*/