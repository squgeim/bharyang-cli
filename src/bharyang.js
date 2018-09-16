const core = require('bharyang');
const sortTypes = require('./constants/sortTypes').default;

/**
 * Returns the function to use for sorting the lines for the given type.
 * If the given type is not supported, the default sort type of group imports.
 *
 * @param {String} type
 * @returns {Function}
 */
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

/**
 * Given a readable stream where each segment is a separate line and the sort
 * type, returns a promise that resolves to the sorted lines.
 *
 * @param {Stream} stream - A readable stream. This method is not responsible 
 *                          for closing the stream.
 * @param {String} sortType - The type of sort to apply
 * @returns {Promise<String>}
 */
function sortImportsFromStream(stream, sortType = sortTypes.GROUP) {
  return new Promise((resolve, reject) => {
    const str = [];
    const sortFunction = getSortFunctionForType(sortType);

    stream.setEncoding('utf-8');

    stream.on('data', s => str.push(s));

    stream.on('end', () => {
      resolve(sortFunction(str.join()));
    });
  });
}

exports.sortImportsFromStream = sortImportsFromStream;
