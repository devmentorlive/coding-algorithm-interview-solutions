/*
  Write a pure function that accepts a list of strings, return the
  longest string. Use no loops.
 */

function longest(array) {
  const lengths = array.map((str, index) => ({
    index,
    length: str.length,
  }));
  
  const i = lengths.reduce(
    (acc, obj) => (obj.length > acc ? obj.index : acc),
    -1,
  );
  return array[i];
}
