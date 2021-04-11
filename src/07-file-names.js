/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let b = '';
  let c = 0;
  for (let i = 0; i < names.length; i++) {
    b = names[i];
    c = 0;
    for (i = 0; i < names.length; i++) {
      if (b === names[i]) {
        c++;
        // eslint-disable-next-line no-param-reassign
        names[i] = names[i].concat('(', c, ')');
      }
    }
  }
  for (let i = 0; i < names.length; i++) {
    b = names[i];
    for (i = 0; i < names.length; i++) {
      if (b === names[i]) {
        renameFiles(names);
      }
    }
  }
  return names;
}

module.exports = renameFiles;
