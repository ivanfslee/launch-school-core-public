//735-758 (Total 23 minutes)

//to method
//input number
//output number

//declare a var and init to 0 - sum var
//iterate from 1 to the input number
  //iterate over each num in this.nums
    //if quotient of outer iteration num / num in this.nums is integer
      // add outer num iteration value to sum
//return sum

class SumOfMultiples {
  constructor(...nums) {
    this.nums = nums; //nums is an array of num args
  }

  hasDivisor(numerator) {
    return this.nums.some(denominator => {
      let quotient = numerator / denominator;
      return Number.isInteger(quotient);
      // return numerator % denominator === 0;
    })
  }

  to(maxNum) {
    let sum  = 0;
    for (let num = 1; num < maxNum; num += 1) {
      if (this.hasDivisor(num)) {
        sum += num;
      }
    }
    return sum;
  }
  //PM - below on line 39 we could've added default arguments
  //e.g. line 39 is const DEFAULTS = [3, 5]; and line 40 is return new SumOfMultiples(...DEFAULTS).to(maxNum);
  static to(maxNum) { //PM - this is similar to Scrabble Score problem where we have a static method reference an instance method
    return (new SumOfMultiples(3, 5)).to(maxNum);
  }
}

module.exports = SumOfMultiples;

// PM - numbers in JavaScript can have underscores
//as numeric separators. e.g. 10_000 is 10000 (ten thousand)


/*
PM - below is modification of code of my original answer.
My inner for loop was not working because it was
adding to the sum variable for each divisor
that was a bonafide divisor of the number being
iterated over. So if a particular number e.g. 15
had 3 and 5 as divisors, my code would add
both 3 and 5 to the sum. This would result in a sum
of multiples that was larger. 

We only want to add to the sum variable
if any of our input numbers were divisors of the
interating number. The problem was that I was
trying to use 'continue' in the inner for loop
to move to the next iteration if a divisor 
was found. But 'continue' does not fix it because
it would move directly to the next iteration.

What I really needed was for the inner for loop
to exit entirely. In order to do this, adding
a 'break' would have worked (line 82). But at the time
of doing the problem. I forgot about 'break'
and thus came up with the solution above, which
had me refactor quite a bit of code and costing
me several more minutes.


class SumOfMultiples {
  constructor(...nums) {
    this.nums = nums; //nums is an array of num args
  }

  to(maxNum) {
    let sum  = 0;
    for (let num = 1; num < maxNum; num += 1) {
      for (let denom of this.nums) {
        let quotient = num / denom;
        if (Number.isInteger(quotient)) {
          sum += num;
          break; //I forgot about 'break' to exit out of the inner for loop
        }
      }
    }
    return sum;
  }

  static to(maxNum) { //PM - this is similar to Scrabble Score problem where we have a static method reference an instance method
    return (new SumOfMultiples(3, 5)).to(maxNum);
  }
}

module.exports = SumOfMultiples;
*/