//212-237 (25min)
//what arguments are there for the class?
//What methods are there? (explicitly from test examples)
//What helper methods are there? (non-explicitly)

//What outpus are there from the tests? connected to what methods are explicit from the tests


//input - 3 integers 
//output - string that is 'equilateral', 'isosceles', 'scalene'

//if integer is negative , should throw an error


//Dont forget to export this class!!! 

//have your tests on right side of screen and the code you are writing on left side of screen

class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
    this._isValidTriangle();
  }

  _allSidesPositive() {
    return [this.s1, this.s2, this.s3].every(side => side > 0);
  }

  _twoSidesGreater() {
    let firstPair = (this.s1 + this.s2) > this.s3;
    let secondPair = (this.s2 + this.s3) > this.s1;
    let thirdPair = (this.s1 + this.s3) > this.s2;
    return firstPair && secondPair && thirdPair;
  }

  _isValidTriangle() {
    if (!this._allSidesPositive()) {
      throw new Error('triangles with negative sides are illegal');
    }

    if (!this._twoSidesGreater()) {
      throw new Error('triangles violating triangle inequality are illegal');
    }
  }

  _isEquilateral() {
    return [this.s1, this.s2, this.s3].every(side => side === this.s1);
  }

  _isScalene() {
    let firstPair = this.s1 !== this.s2;
    let secondPair = this.s2 !== this.s3;
    let thirdPair = this.s1 !== this.s3;
    return firstPair && secondPair && thirdPair;
  }

  _isIsosceles() {
    let firstPair = this.s1 === this.s2;
    let secondPair = this.s2 === this.s3;
    let thirdPair = this.s1 === this.s3;
    return firstPair || secondPair || thirdPair;
  }

  kind() {
    if (this._isEquilateral()) return 'equilateral';
    if (this._isScalene()) return 'scalene';
    if (this._isIsosceles()) return 'isosceles';
  }
}

module.exports = Triangle;


/*
In Progress - refactor
class Triangle {
  constructor(...sides) { 
    [ this.s1, this.s2, this.s3 ] = sides;
    this._isValidTriangle();
  }

  _allSidesPositive() {
    return [this.s1, this.s2, this.s3].every(side => side > 0);
  }

  _twoSidesGreater() {
    let firstPair = (this.s1 + this.s2) > this.s3;
    let secondPair = (this.s2 + this.s3) > this.s1;
    let thirdPair = (this.s1 + this.s3) > this.s2;
    return firstPair && secondPair && thirdPair;
  }

  _isValidTriangle() {
    if (!this._allSidesPositive()) {
      throw new Error('triangles with negative sides are illegal');
    }

    if (!this._twoSidesGreater()) {
      throw new Error('triangles violating triangle inequality are illegal');
    }
  }

  _isEquilateral() {
    return [this.s1, this.s2, this.s3].every(side => side === this.s1);
  }

  _isScalene() {
    let firstPair = this.s1 !== this.s2;
    let secondPair = this.s2 !== this.s3;
    let thirdPair = this.s1 !== this.s3;
    return firstPair && secondPair && thirdPair;
  }

  _isIsosceles() {
    let firstPair = this.s1 === this.s2;
    let secondPair = this.s2 === this.s3;
    let thirdPair = this.s1 === this.s3;
    return firstPair || secondPair || thirdPair;
  }

  kind() {
    if (this._isEquilateral()) return 'equilateral';
    if (this._isScalene()) return 'scalene';
    if (this._isIsosceles()) return 'isosceles';
  }
}

module.exports = Triangle;
*/