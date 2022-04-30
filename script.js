const fizz_buzz = (loopTimes) => {
  let i = 1;

  while (i < loopTimes + 1) {
    i++;

    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`FizzBuzz ${i}`);
    } else if (i % 3 == 0) {
      console.log(`Fizz ${i}`);
    } else if (i % 5 == 0) {
      console.log(`Buzz ${i}`);
    }
  }
};

fizz_buzz(100);
