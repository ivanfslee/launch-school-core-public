//514-529

//if input word is empty/falsy, score is zero

//words are case insensitive

//score method 
  //input - nothing
  //output - number
  //constraints?
    //case insensitive
  //edge cases?
    //if word is falsy, score is 0

  //declare a var and init to 0
  //if (!word) return 0

  //iterate over each char of word lowercased
    //iterate of score map keys
      //if key includes char
        //add to score variable, value
  //return score variable  

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static scoreMap = {
    'aeioulnrst': 1,
    'dg': 2,
    'bcmp': 3,
    'fhvwy': 4,
    'k': 5,
    'jx': 8,
    'qz': 10
  }

  static score(word) {
    let wordObj = new Scrabble(word);
    return Scrabble.prototype.score.call(wordObj); //PM - can refactor this to - return (new Scrabble(word)).score()
  }

  score() {
    if (!this.word) return 0;

    let wordScore = 0;
    for (let char of this.word.toLowerCase()) {
      for (let key in Scrabble.scoreMap) {
        if (key.includes(char)) {
          wordScore += Scrabble.scoreMap[key];
        }
      }
    }
    return wordScore;
  }
}

module.exports = Scrabble;