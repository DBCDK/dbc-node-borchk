'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getBorrowerCheckResult = getBorrowerCheckResult;
exports.init = init;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _dbcNodeBasesoapClient = require('dbc-node-basesoap-client');

var BaseSoapClient = _interopRequireWildcard(_dbcNodeBasesoapClient);

var wsdl = null;
var defaults = {};

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @return {Promise}
 */

function sendBorrowerCheckRequest(params) {
  var borrcheck = BaseSoapClient.client(wsdl, defaults, '');
  return borrcheck.request('borrowerCheck', params, null, true);
}

/**
 * Constructs the object of parameters for borrower result request.
 *
 * @return {Promise}
 * @param {{userId: string, userPincode: string, libraryCode: string}} values
 */

function getBorrowerCheckResult(values) {
  var params = {
    userId: values.userId,
    userPincode: values.userPincode,
    libraryCode: values.libraryCode
  };
  return sendBorrowerCheckRequest(params);
}

var METHODS = {
  getBorrowerCheckResult: getBorrowerCheckResult
};

exports.METHODS = METHODS;
/**
 * Setting the necessary paramerters for the client to be usable.
 * The wsdl is only set if wsdl is null to allow setting it through
 * environment variables.
 *
 * @param {{wsdl: string, serviceRequester: string}} config Config object with the necessary parameters to use
 * the webservice
 *
 * @returns {{METHODS}}
 */

function init(config) {

  if (typeof config !== 'object') {
    throw new Error('A config object should be provided');
  }

  if (!config.wsdl) {
    throw new Error('A wsdl key should be provided with the given config object');
  }

  if (!config.serviceRequester) {
    throw new Error('A serviceRequester key should be provided with the given config object');
  }

  if (!wsdl) {
    wsdl = config.wsdl;
  }

  defaults = {
    serviceRequester: config.serviceRequester
  };

  return METHODS;
}