const sortTypes = require('./constants/sortTypes');
const sortImportsFromStream = require('./bharyang').sortImportsFromStream;

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
