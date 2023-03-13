//*
function twoSum(nums: number[], target: number): number[] {
  const obj = {} as { [key: number]: number };
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let otherValue = target - current;
    if (current in obj) {
      return [i, obj[current]];
    } else {
      obj[otherValue] = i;
    }
  }
  return [];
}

const a = twoSum([1, 2, 3, 4, 5], 4);
console.log(a);
