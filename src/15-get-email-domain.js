/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let b = 0;
  let i = 0;
  let aremail = [];
  aremail = email.split('');
  for (i = 0; i < aremail.length; i++) {
    if (aremail[i] === '@') {
      b = i + 1;
    }
  }
  return email.substr(b);
}

module.exports = getEmailDomain;
