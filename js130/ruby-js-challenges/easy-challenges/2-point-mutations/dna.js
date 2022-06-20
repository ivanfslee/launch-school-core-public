//248 -252 - 300-319 (Total 23 to 31 minutes)

//define a class called DNA

//explicit methods 
//new DNA(original strand)
//hammingDistance(comparison strand)
//constructor method
  //this.dna 

//hamming distance 
  //input - string
  //output - number
  //edge case - empty string?
  //length of string passed in is shorter than dna

  //declare shorter
  //declare longer
  
  //if passed in dna is longer,
    //shorter is original dna
    //longer is passed in dna
  //else
    //shorter is passed in dna
    //longer is original dna

  //declare short pointer = 0
  //declare long pointer = 0
  //declare hammingDistance = 0

  //while short pointer is less than length of shorter dna variable
    //if char at short pointer is not equal to char at long pointer
      //increment hammingDistance
    //increment short pointer
    //increment long pointer
  //return hammingDistance

class DNA {
  constructor(dna) {
    this.dna = dna;
  }

  static dnaLength(strand) {
    return strand.length;
  }

  hammingDistance(comparisonStrand) {
    let shorter;
    let longer;
    
    if (DNA.dnaLength(comparisonStrand) > DNA.dnaLength(this.dna)) {
      shorter = this.dna;
      longer = comparisonStrand;
    } else {
      shorter = comparisonStrand;
      longer = this.dna;
    }

    let shortPointer = 0;
    let longPointer = 0;
    let hammingDistance = 0;

    while (shortPointer < DNA.dnaLength(shorter)) {
      let charShort = shorter[shortPointer];
      let charLong = longer[longPointer];
      if (charShort !== charLong) {
        hammingDistance += 1;
      }
      shortPointer += 1;
      longPointer += 1;
    }
    return hammingDistance;
  }
}

module.exports = DNA;