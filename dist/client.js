'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = BorchkServiceClient;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _dbcNodeBasesoapClient = require('dbc-node-basesoap-client');

var BaseSoapClient = _interopRequireWildcard(_dbcNodeBasesoapClient);

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {string} wsdl
 * @param {string} ServiceRequester
 * @param {{userId: string, userPincode: string, libraryCode: string}} params
 * @return {Promise}
 */

function getBorrowerCheckResult(wsdl, serviceRequester, params) {
  var borrcheck = BaseSoapClient.client(wsdl, { serviceRequester: serviceRequester }, '');
  return borrcheck.request('borrowerCheck', params, null, true);
}

/**
 * Setting the necessary paramerters for the client to be usable.
 * The wsdl is only set if wsdl is null to allow setting it through
 * environment variables.
 *
 * @param {{wsdl: string, serviceRequester: string}} config Config object with the necessary parameters to use
 * the webservice
 *
 * @returns {getBorrowerCheckResult}
 */

function BorchkServiceClient(config) {

  if (typeof config !== 'object') {
    throw new Error('A config object should be provided');
  }

  if (!config.wsdl) {
    throw new Error('A wsdl key should be provided with the given config object');
  }

  if (!config.serviceRequester) {
    throw new Error('A serviceRequester key should be provided with the given config object');
  }

  return {
    getBorrowerCheckResult: getBorrowerCheckResult.bind(null, config.wsdl, config.serviceRequester)
  };
}

module.exports = exports['default'];