//332-348 (Total 16min)

//match method -
// input - takes in an array of strings
//output - sorted array of strings that are anagrams

//an anagram is not case sensitive,
//but not same word
//e.g. corn and Corn are not anagrams
//anagram is not the same word
//e.g. corn and corn are not anagrams

//match method
//input array of strings
//output array of strings

//declare a var and init to empty array
//iterate over each string in array
//if string is anagram
//push string into empty array
//return empty array

//is anagram
//input - two words
//output - boolean

//if both lowercased is equal to each other,
//return false

//lower case both words and split them and sort them and join them
//if they are equal, then return true, else false

class Anagram {
  constructor(original) {
    this.original = original;
  }

  static isAnagram(word1, word2) {
    if (word1.toLowerCase() === word2.toLowerCase()) {
      return false;
    }

    let word1Sorted = word1.toLowerCase().split('').sort().join('');
    let word2Sorted = word2.toLowerCase().split('').sort().join('');

    return word1Sorted === word2Sorted;
  }

  match(arrStrings) {
    let anagrams = [];

    for (let str of arrStrings) {
      if (Anagram.isAnagram(str, this.original)) { //PM - could refactor to this.isAnagram and make isAnagram an instance method rather than a static method
        anagrams.push(str);
      }
    }

    return anagrams.sort(); //PM - don't need the sort method call here, the test will sort for you (line 52 of anagram.test.js)
  }
}

module.exports = Anagram;