//637-655 (Total 18 min)

//given an octal, return it in decimal

//toDecimal method
  //input - string 
  //output number

  //constraints?

  //edge cases?
    //if string to number is NaN , return 0
    //if string includes '8' or '9' , return 0

  //declare a var and init to 0 - this is sum
  //iterate over each char of input string by index, 0 to length of string
    //our power is (total length of input string - index) - 1
    //multiply current num str * 8 to the power
    //add that product to sum
  //return sum

class Octal {
  constructor(octalStr) {
    this.octalStr = octalStr;
  }

  inputIsNaN(str) {
    let numStr = Number(str);
    return Number.isNaN(numStr)
  }

  toDecimal() {
    if (this.inputIsNaN(this.octalStr)) return 0; //PM - you could combine this and the next if statement into one helper function that validates the octal input
    if (this.octalStr.includes('8') || this.octalStr.includes('9')) {
      return 0;
    }

    let sum = 0;
    const BASE = 8

    for (let idx = 0; idx < this.octalStr.length; idx += 1) {
      let currentDigit = this.octalStr[idx];
      let exponent = (this.octalStr.length - idx) - 1;
      sum += Number(currentDigit) * Math.pow(BASE, exponent);
    }

    return sum;
  }
}

module.exports = Octal;