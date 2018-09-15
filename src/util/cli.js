/**
 * Check if the standard input has a pipe attached.
 *
 * @returns {boolean}
 */
function isPipeAttached() {
  return !process.stdin.isTTY;
}

/**
 * @returns {String} - Invalid usage message
 */
function invalidUsageMessage() {
  return `Usage: cat importLines | bharyang-cli`;
}

exports.default = {
  isPipeAttached: isPipeAttached,
  invalidUsageMessage: invalidUsageMessage,
};
