/*
  Write a generator using a higher order function that will generate
  integers starting at a 'from' and going up to a 'to' value. Once
  the 'to' value has been generated, the generator will return
  undefined.
 */

function from(start) {
  let i = start;
  return function () {
    return i++;
  };
}

function to(end) {
  let i = 0;
  return function () {
    if (i > end) return undefined;
    return i++;
  };
}

function range(start, end) {
  const gFrom = from(start);
  const gTo = to(end);
  return function () {
    let from = gFrom();
    let to = gTo();
    return to > end ? undefined : to;
  };
}
