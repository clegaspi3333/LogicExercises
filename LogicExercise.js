// What is the Challenge?
// Solve the below 3 javascript puzzles. The goal of this challenge is to practice our logic skills. Something that is useful not only in interviews when you get challenging problems, but also in your day to day work as a developer. First, start off by reading this article: https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


const messyArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const answer = (arr) => {
    arr.sort((a, b) => a - b); // Sort the input array in ascending order
    
    let cleanArray = [];
    let currentGroup = [];

    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is the same as the next element
        if (arr[i] === arr[i + 1]) {
            currentGroup.push(arr[i]);
        } else {
            // Add the current element to the currentGroup
            currentGroup.push(arr[i]);

            // Check if the currentGroup has more than one element
            if (currentGroup.length > 1) {
                cleanArray.push(currentGroup);
            } else {
                // If currentGroup has only one element, add it directly to the cleanArray
                cleanArray.push(currentGroup[0]);
            }

            // Reset currentGroup for the next group
            currentGroup = [];
        }
    }

    return cleanArray;
};

console.log(answer(messyArray));


const mixedArray = [1, "2", "3", 2];

// Separate numbers and strings into different arrays
const numbers = mixedArray.filter(item => typeof item === 'number');
const strings = mixedArray.filter(item => typeof item === 'string');

// Sort numbers and strings separately
numbers.sort((a, b) => a - b);
strings.sort();

// Combine sorted numbers and strings into a single array
const sortedMixedArray = [numbers, strings];

console.log(sortedMixedArray); // Output: [[1, 2], ["2", "3"]]




