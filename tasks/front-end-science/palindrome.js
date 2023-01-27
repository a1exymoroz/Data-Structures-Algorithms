palindrome("racecar");
palindrome("table");
palindrome("Анна");
palindrome("А роза упала на лапу Азора");

function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  return str === str.split("").reverse().join("");
}

function palindrome2(str) {
  const len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}
