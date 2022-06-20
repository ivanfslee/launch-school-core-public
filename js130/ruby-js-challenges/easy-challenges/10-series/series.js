//944-1003 (Total 19 min)

//slices method
//input number
//output - array of arrays

//constraints?
//edge cases?
  //if num input is greater than the length
  //of numStr, then raise an error
//input validation?

//if span is greater than numStr length, raise error
//declare a var and init to empty array 

//iterate over each char of numStr
//start at idx 0, up to, 

//length is 8, stop at index 6 
//for (let idx = 0; idx <= numStr.length - span; idx += 1) {

// }
  //take a slice of numStr from, current idx to current idx plus span
  //split slice into digit strings, convert each digit string into number
  //push array of numbers into data structure
//return data structure

class Series {
  constructor(numStr) {
    this.numStr = numStr;
  }

  slices(span) {
    if (span > this.numStr.length) {
      throw new Error('slice length cannot be greater than length of numeric string');
    }

    let series = [];

    for (let idx = 0; idx <= this.numStr.length - span; idx += 1) {
      let slice = this.numStr.slice(idx, idx + span);
      let subseries = slice.split('').map(Number);
      series.push(subseries);
    }
    return series;
  }
}

module.exports = Series;