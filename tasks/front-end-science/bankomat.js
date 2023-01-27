// Easy

// function iWantToGet(ammountRequired) {
//   const availableNotes = [100, 50, 20, 10];
//   const result = [];

//   if (ammountRequired > 0) {
//     for (let index = 0; index < availableNotes.length; index++) {
//       const note = availableNotes[index];

//       while (ammountRequired - note >= 0) {
//         ammountRequired -= note;
//         result.push(note);
//       }
//     }
//   } else {
//     console.log("Pls enter new amount");
//   }

//   return result;
// }

// console.log(iWantToGet(160));

// Hard
// function iWantToGet(ammountRequired, limits) {
//   const nominals = Object.keys(limits).sort((a, b) => b - a);
// // console.log(nominals);
//   const collect = (amount, nominals) => {
//     if (amount === 0) return {};
//     if (!nominals.length) return;

//     const currentNominal = nominals[0];
//     const availableNotes = limits[currentNominal];
//     const notesNeeded = Math.floor(amount / currentNominal);
//     const numberOfNotes = Math.min(availableNotes, notesNeeded);

//     // console.log(numberOfNotes);
//     // console.log(nominals);
//     for (let index = numberOfNotes; index >= 0; index--) {
//       const result = collect(
//         amount - index * currentNominal,
//         nominals.slice(1)
//       );

//       if (result) {
//         return index ? { [currentNominal]: index, ...result } : result;
//       }
//     }
//   };

//   return collect(ammountRequired, nominals);
// }

// const limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

// console.log(iWantToGet(230, limits));
// console.log(iWantToGet(1000, limits));
// console.log(iWantToGet(200, limits));
// console.log(iWantToGet(150, limits));
// console.log(iWantToGet(120, limits));

// Middle
function iWantToGet(ammountRequired, limits) {
  const nominals = Object.keys(limits).sort((a, b) => b - a);
  const result = {};
  let mySum = ammountRequired;

  nominals.forEach((item) => {
    const num = Math.floor(mySum / item);
    const min = Math.min(num, limits[item]);
    result[item] = min;
    limits[item] -= min;
    mySum = mySum - item * min;
  });

  if (mySum > 0) {
    return "error";
  }

  return result;
}

const limits = { 1000: 1, 500: 2, 100: 10, 50: 2, 30: 1 };

console.log(limits);
console.log(iWantToGet(230, limits));
console.log(limits);
console.log(iWantToGet(1000, limits));
console.log(iWantToGet(200, limits));
console.log(iWantToGet(300, limits));
console.log(iWantToGet(120, limits));
