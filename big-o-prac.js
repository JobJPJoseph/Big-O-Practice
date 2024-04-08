animals = ['alligator', 'bear', 'cat', 'dog', 'elephant', 'fish', 'goose', 'hamster', 'iguana', 'jaguar', 'kangaroo'];

// Count how many animals are in the list
// Time complexity: O(?)
// Space complexity: O(?)
function countAnimals(animals) {
  let count = 0;
  for (let i = 0 ; i < animals.length ; i++) {
    count++;
  }
  return count;
}

/*
Time complexity:
    'n' in this case is animals and can be minipulated. Since 'n' is changable it is linear,
    effectively making O(n). The runtime is soley dependent on 'n'.

Space complexity:
    constant: 'i', 'count'
    O(1);
*/

// Count how many animals are in the list
// Time complexity: O(?)
// Space complexity: O(?)
function countAnimals2(animals) {
    return animals.length;
}

/*
Time complexity:
    'Array.length' is constant thus is O(1);

Space complexity:
    O(1)
*/


// Print the first 10 animals in the list
// Time complexity: O(?)
// Space complexity: O(?)
function printTenAnimals(animals) {
    if (animals.length < 10) {
      throw Error("not enough animals")
    }

    console.log(animals[0]);
    console.log(animals[1]);
    console.log(animals[2]);
    console.log(animals[3]);
    console.log(animals[4]);
    console.log(animals[5]);
    console.log(animals[6]);
    console.log(animals[7]);
    console.log(animals[8]);
    console.log(animals[9]);
}

/*
Time complexity:
  The animals.length is linear
  Doing all the console.logs are all constants so its O(11) or better, O(1);

Space complexity:
  animals.length is constant. All console.logs and animals referenses are all constants
  O(1)
*/

// Print out all the animals
// Time complexity: O(?)
// Space complexity: O(?)
function printAnimals(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
}

/*
Time complexity:
  'n' can be minipulated thus making this O(n);

Space complexity:
  constants: 'console.log()', 'animals[i]', 'i', 'animals.length'
  O(1)
*/

// Print out all the animals twice
// Time complexity: O(?)
// Space complexity: O(?)
function printAnimalsTwice(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
  for (let j = 0 ; j < animals.length ; j++) {
    console.log(animals[j]);
  }
}

/*
Time complexity:
  Even though there are two loops, there are adjacent now nested. So its really going through the array only twice.
  The time complexity should be O(n).

Space complexity:
  constants: 'i', 'j', 'console.log', 'anmals[i]', 'animals[j]'
  O(1)
*/

// Print all possible pairs of animals
// Time complexity: O(?)
// Space complexity: O(?)
function printAnimalPairs(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      console.log(`${animals[i]} - ${animals[j]}`);
    }
  }
}

/*
Time complexity:
  This is a quadratic growth because of the nested linear growth in the first for-loop whose also linear.

Space complexity:
  constants: 'i', 'j', 'animals.length', 'animals[i]', 'animals[j]', 'console.log()'
  So O(1)
*/

// Return an array containing all possible pairs of animals
// Time complexity: O(?)
// Space complexity: O(?)
function getAnimalPairs(animals) {
  const pairs = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      pairs.push([animals[i], animals[j]]);
    }
  }
  return pairs;
}

/*
Time complexity:
  There are two linear growth and its nested thus making it O(n^2)

Space complexity:
  constants: 'i', 'j', 'pairs.push()'
  pairs is constant however, the operation 'pairs.push([animals[i], animals[j]]);' is nested
  in a 2-d loop and pushing in that data in pairs. That data is taking up space so it O(n^2)
*/

// Return an array containing all possible pairs of animals
// Time complexity: O(?)
// Space complexity: O(?)
function getAnimalTriples(animals) {
  const triples = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      for (let k = 0 ; k < animals.length ; k++) {
        triples.push([animals[i], animals[j], animals[k]]);
      }
    }
  }
  return triples;
}


/*
Time complexity:
  The operation inside is constant sense it only making references and pushing the results into triples.
  There a three linear growth here so O(n^3)
Space complexity:
  constants: 'i', 'j', 'k', 'triples.push()', 'animals[i]', 'animals[j]', 'animals[k]'
  linear: 'animals'
  quadratic: 'triples'
  O(n^3)
*/

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(?)
// Space complexity: O(?)
function findAnimal(animals, target) {
  for (let i = 0 ; i < animals.length ; i++) {
    if (animals[i] === target) return i;
  }
  return -1;
}

/*
Time complexity:
  Since big-o is worst case scenario so worst case would be O(n)
Space complexity:
  constants: 'i', 'animals', 'target', '-1'
  O(1)
*/
