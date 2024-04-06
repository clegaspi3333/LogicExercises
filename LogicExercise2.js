// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const answer = (arr, num) => {
    let ans = [ ];
    
     // Iterate through each element of the array
     for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        // Iterate through remaining elements of the array
        for (let j = i + 1; j < arr.length; j++) {
            let sum = element + arr[j];

            // If sum is equal to num, push the pair to the ans array
            if (sum === num) {
                ans.push([element, arr[j]]);
            }
        }
    }

    return ans;
}

let sampleArr = [1,2,3,2,1];
let target = 4;

console.log(answer(sampleArr, target));
