const input1 = [1, 2, 2, 1];
const input2 = [2, 2];

const input3 = [4, 9, 5];
const input4 = [9, 4, 9, 8, 4];

const intersect = (nums1, nums2) => {
  let result = [];

  let map = nums1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});

  for (let index = 0; index < nums2.length; index++) {
    const element = nums2[index];
    let count = map[element];

    if (count && count > 0) {
      result.push(element);
      map[element] -= 1;
    }
  }

  return result;
};

console.log(intersect(input1, input2));
console.log(intersect(input3, input4));
