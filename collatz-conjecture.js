function collatz(num) {
  while (num > 1) {
    if (num % 2 === 0) {
      console.log(num + ' is even, so we divide it by 2.');

      num /= 2;
    } else {
      console.log(num + ' is odd. Multiplyling by 3 and adding 1');

      num = num * 3 + 1;
    }
  }

  console.log(num);
}

collatz(15);