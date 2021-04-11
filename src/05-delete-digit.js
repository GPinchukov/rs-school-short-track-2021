/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const n2 = n.toString().split('');
  let b = n2[0];
  let i = 0;
  for (i = 0; i < n2.length; i++) {
    if (b > n2[i]) {
      b = n2[i];
    }
  }
  n2.splice(n2.indexOf(b), 1);
  return +n2.join('');
}

module.exports = deleteDigit;
