//323-406 (43 minutes total)

class Robot {
  static allRobots = [];
  constructor() {
    this.robotName = null;
  }

  generateName() {
    let alphabetStr = this.getTwoRandomLetters();
    let numericStr = this.getTwoRandomNumbers();
    let newName = alphabetStr + numericStr;
    return newName
  }

  name() {
    if (this.robotName !== null) return this.robotName;

    let createdName = this.generateName();
    while (Robot.allRobots.includes(createdName)) {
      createdName = this.generateName();
    }

    Robot.allRobots.push(createdName);
    this.robotName = createdName;
    return createdName;
  }

  reset() {
    let nameIdx = Robot.allRobots.indexOf(this.robotName);
    Robot.allRobots.splice(nameIdx, 1);
    this.robotName = null;
  }

  getTwoRandomLetters() {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let idx1 = Math.floor(Math.random() * ALPHABET.length);
    let idx2 = Math.floor(Math.random() * ALPHABET.length);
    return ALPHABET[idx1] + ALPHABET[idx2];
  }

  getTwoRandomNumbers() {
    const NUMBERS = '0123456789';
    let idx1 = Math.floor(Math.random() * NUMBERS.length);
    let idx2 = Math.floor(Math.random() * NUMBERS.length);
    return NUMBERS[idx1] + NUMBERS[idx2] + NUMBERS[idx2];
  }
}


// let newRobot = new Robot();
// let newName = newRobot.name();

// console.log('newName is: ', newName);
// console.log(newRobot.name());


module.exports = Robot;

/*
PM Notes:
- In the name method, I forget to
 set this.robotName to the newly created name
 and that caused a bug that took a long time
 to debug.

null === null is true

- I should've abstracted out the generate name
method code into its own method alot sooner because
I was getting into an issue with the recursive call
of the name method to generate a new robot name.

The guard clause was causing issues with a recursive call
of the name method

*/