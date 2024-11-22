var twoSum = function(nums, target) {
    let numIndices = {}
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (complement in numIndices) {
            return [numIndices[complement], i]
        }
        numIndices[nums[i]] = i
    }
    return []
};

console.log(twoSum([2, 7, 11, 15], 9), twoSum([3, 2, 4], 6), twoSum([3, 3], 6))