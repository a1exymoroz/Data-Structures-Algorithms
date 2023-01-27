// const isPrime = (num) => {
//   if (num === 1) {
//     return true;
//   }
//   let sum = 0;
//   for (let index = 1; index <= num; index++) {
//     const isDividend = num % index === 0;
//     console.log(isDividend);
//     if (isDividend) {
//       sum++;
//     }
//     if (sum > 2) {
//       return false;
//     }
//   }
//   return true;
// };
const isPrime = (num) => {
  for (let index = 2, max = Math.sqrt(num); index <= max; index++) {
    if (num % index === 0) {
      return false;
    }
  }

  //   for (let index = 2; index < num; index++) {
  //     if (num % index === 0) {
  //       return false;
  //     }
  //   }
  return num > 1;
};

console.log(isPrime(4));

// const getPrimes = (num) => {
//   const arr = [];
//   for (let index = 2; index < num; index++) {
//     const isPrimeElement = isPrime(index);
//     if (isPrimeElement) {
//       arr.push(index);
//     }
//   }
//   return arr;
// };

// console.log(getPrimes(8));

// Решето Эратосфена
const getPrimesSieve = (num) => {
  const seive = [];
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (!seive[i]) {
      primes.push(i);
      //   for (let j = i * 2; j <= num; j += i) {
      //     seive[j] = true;
      //   }
      for (let j = i * i; j <= num; j += i) {
        seive[j] = true;
      }
    }
  }
  return primes;
};

console.log(getPrimesSieve(120));
