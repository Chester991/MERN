function vowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

const count = (a) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (
      a[i] === "a" ||
      a[i] === "e" ||
      a[i] === "i" ||
      a[i] === "o" ||
      a[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(vowels("helloaeiou"));
console.log(count("helloaeiou") + 1);
