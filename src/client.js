'use strict';
import * as BaseSoapClient from 'dbc-node-basesoap-client';

let wsdl = null;
let defaults = {};

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @return {Promise}
 */

function sendBorrowerCheckRequest(params) {
  let borrcheck = BaseSoapClient.client(wsdl, defaults, '');
  return borrcheck.request('borrowerCheck', params, null, true);
}

/**
 * Constructs the object of parameters for borrower result request.
 *
 * @return {Promise}
 * @param {{userId: string, userPincode: string, libraryCode: string}} values
 */
export function getBorrowerCheckResult(values) {
  const params = {
    userId: values.userId,
    userPincode: values.userPincode,
    libraryCode: values.libraryCode
  };
  return sendBorrowerCheckRequest(params);
}

export const METHODS = {
  getBorrowerCheckResult: getBorrowerCheckResult
};

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
export function init(config) {

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
