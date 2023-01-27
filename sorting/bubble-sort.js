const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) { 
        if(array[j] > array[j+1]) {
          //Swap the numbers
          let temp = array[j]
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }        
    }
  }

// function bubbleSort(array) {
//   let length = array.length - 1;
//   while (length > 0) {
//     for (let index = 0; index < length; index++) {
//       if (array[index] > array[index + 1]) {
//         [array[index], array[index + 1]] = [array[index + 1], array[index]];
//       }
//     }
//     length--;
//   }
// }

bubbleSort(numbers);
console.log(numbers);
