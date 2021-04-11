/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let a = Boolean();
  let n2 = '';
  n2 = n.replace(/-/g, '').split('');
  if ((n2.length === 12) && (n2[0] === 'F' || n2[0].match(/\d/) != null)) { a = true; } else { a = false; }
  return a;
}
module.exports = isMAC48Address;
