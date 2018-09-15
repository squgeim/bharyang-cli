const sortTypes = require('./constants/sortTypes');
const sortImportsFromStream = require('./bharyang').sortImportsFromStream;

/**
 * Returns the sort type to apply from the command line arguments.
 *
 * @param {String[]} [argv] - defaults to process.argv
 * @returns {String}
 */
function getSortTypeFromArgv(argv = process.argv) {
  const sortArgMap = {
    '--asc': sortTypes.ASC,
    '--desc': sortTypes.DESC,
    '--group': sortTypes.GROUP,
  };

  return argv.reduce(
    (sortType, v) => v in sortArgMap ? sortArgMap[v] : sortType,
    sortTypes.GROUP
  );
}

/**
 * Process the input lines from stdin stream.
 * Takes no argument.
 *
 * @returns {Promise} - resolves when sorting is complete, does not return any
 *                      data.
 */
function processStdinStream() {
  const stdin = process.stdin;
  const sortType = getSortTypeFromArgv();

  return sortImportsFromStream(stdin, sortType)
    .then(result => {
      process.stdout.write(result);
    })
    .catch(err => {
      process.stderr.write(err);
      console.log('Oops. There was an error.');
    });
}

exports.processStdinStream = processStdinStream
