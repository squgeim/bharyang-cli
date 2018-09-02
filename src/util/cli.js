/**
 * Check if the standard input has a pipe attached.
 *
 * @returns {boolean}
 */
function isPipeAttached() {
  return !process.stdin.isTTY;
}

exports.isPipeAttached = isPipeAttached;
