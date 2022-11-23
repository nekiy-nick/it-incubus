const solution = number => {
  const numbArray = [];

  for (let i = number - 1; i > 1; i -= 1) {

    const multiThree = i % 3 === 0;
    const multiFive = i % 5 === 0;

    if (multiThree || multiFive) {
      numbArray.push(i);
    }
  }

  return numbArray.reduce((sum, num) => sum += num, 0);
};