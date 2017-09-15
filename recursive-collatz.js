function recursiveCollatz(num) {
  if (num === 1) return console.log(num);

  if (num % 2 === 0) {
    console.log(num + ' is even, so we divide it by 2.');

    return recursiveCollatz(num / 2);
  } else {
    console.log(num + ' is odd. Multiplyling by 3 and adding 1');

    return recursiveCollatz(num * 3 + 1);
  }
}

recursiveCollatz(15);