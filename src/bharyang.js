const core = require('bharyang');
const sortTypes = require('./constants/sortTypes');

function getSortFunctionForType(type) {
  switch (type) {
    case sortTypes.ASC:
      return core.sortAscending;
    case sortTypes.DESC:
      return core.sortDescending;
    case sortTypes.GROUP:
    default:
      return core.sortImports;
  }
}

function sortImportsFromStream(stream, sortType = sortTypes.GROUP) {
  return new Promise((resolve, reject) => {
    const str = [];
    const sortFunction = getSortFunctionForType(sortType);

    stream.setEncoding('utf-8');

    stream.on('readable', () => {
      stream.on('data', s => str.push(s));
    });

    stream.on('end', () => {
      resolve(sortFunction(str.join()));
    });
  });
}

exports.sortImportsFromStream = sortImportsFromStream;
