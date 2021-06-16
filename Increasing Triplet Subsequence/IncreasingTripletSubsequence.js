var increasingTriplet = function (nums) {
  let min = null;
  const secMin = [];

  for (let current of nums) {
    if (min === null) {
      min = current;
      continue;
    }

    for (let sec of secMin) {
      if (current > sec) return true;
    }

    if (current > min) {
      secMin.push(current);
    }

    if (current < min) {
      min = current;
    }
  }

  return false;
};
