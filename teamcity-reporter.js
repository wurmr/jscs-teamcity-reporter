'use strict';

var util = require('util');
/**
 * @param {Errors[]} errorsCollection
 */
module.exports = function(errorsCollection) {
  var errorCount = 0;

  console.log('##teamcity[testSuiteStarted name=\'JSCS\']');

  /**
   * Formatting every error set.
   */
  errorsCollection.forEach(function(errors) {
    var file = errors.getFilename();

    if (!errors.isEmpty()) {
      console.log(util.format('##teamcity[testStarted name=\'%s\']', file));
      errors.getErrorList().forEach(function(error) {
        errorCount++;
        console.log(util.format(
          '##teamcity[testFailed name=\'%s\' message=\'line %d, col %d, %s\']',
          file, error.line, error.column, error.message));
      });
      console.log(util.format('##teamcity[testFinished name=\'%s\']', file));
    }

  });

  if (errorCount === 0) {
    console.log('##teamcity[testStarted name=\'JSCS\']');
    console.log('##teamcity[testFinished name=\'JSCS\']');
  }

  console.log(util.format('##teamcity[testSuiteFinished name=\'JSCS\']'));
};
