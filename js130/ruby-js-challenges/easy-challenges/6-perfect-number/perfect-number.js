//602-613 (Total - 11 minutes)

//classify method 
  //input - number
  //output - string

  //constraints?

  //edge cases?
    //if negative number, raise a generic error
  //input validation?

  //declare a var and init to 0 - aliquot sum

  //iterate from 1 to the input number (excluding input number)
    //if num / iterating number is integer
      //add iterating number to aliquot sum var

  //if aliquot sum === num
    //return 'perfect'
  //else if sum is greater than num
    //return 'abundant'
  //else
    //return 'deficient

class PerfectNumber {
  static classify(num) {
    if (num < 0) {
      throw new Error('negative numbers are not allowed');
    }

    let aliquotSum = 0;

    for (let divisor = 1; divisor < num; divisor += 1) { //PM - could put this for loop in its own helper function
      let quotient = num / divisor;
      if (Number.isInteger(quotient)) {
        aliquotSum += divisor;
      }
    }

    if (aliquotSum === num) { //PM - could put this if statement in its own helper function
      return 'perfect';
    } else if (aliquotSum > num) {
      return 'abundant';
    } else {
      return 'deficient';
    }
  }
}

module.exports = PerfectNumber;