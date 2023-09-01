/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // store 0 as the initial index
    let stored = 0;

    // first loop through the array
    for (let i = 1; i < nums.length; i++) {

        // second loop through the array, checking sum for target
        for (let j = i; j < nums.length; j++) {
            if (nums[stored] + nums[j] === target) {
                return [stored, j];
            }
        }

        // replace stored with the index if no matches
        stored = i;
    }
};

// time complexity: o(n^2)
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?