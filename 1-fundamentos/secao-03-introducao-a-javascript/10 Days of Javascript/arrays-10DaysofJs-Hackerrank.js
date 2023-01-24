function getSecondLargest(nums) {
    nums.sort((a, b) => b - a);
    let largest = nums[0];
    let secondLargest = nums[1];

    for (let index = 2; index < nums.length; index += 1) {
      if (largest === secondLargest) {
        secondLargest = nums[index];
      } 
    }
    return secondLargest;
}

console.log(getSecondLargest([2, 3, 6, 6, 5, 6, 6]));