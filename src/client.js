'use strict';
import * as BaseSoapClient from 'dbc-node-basesoap-client';
import * as OpenAgencyClient from 'dbc-node-openagency-client';

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
 * @param {Object} value Object with parameters for getting a search result
 * @return {Promise}
 */
export function getBorrowerCheckResult(values) {
  const params = {
    userId: values.userId,
    userPincode: values.userPincode,
    libraryCode: values.libraryCode
  };
  return sendBorrowerCheckRequest(params);
}

export function getNameLibrary(values) {
  let config = {
    wsdl: values.wsdl
  };

  OpenAgencyClient.init(config);

  return OpenAgencyClient.getNameLibrary({
    libraryType: values.libraryType
  });
}

export const METHODS = {
  getBorrowerCheckResult: getBorrowerCheckResult,
  getNameLibrary: getNameLibrary
};

/**
 * Setting the necessary paramerters for the client to be usable.
 * The wsdl is only set if wsdl is null to allow setting it through
 * environment variables.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */
export function init(config) {
  if (!wsdl) {
    wsdl = config.wsdl;
  }
  defaults = {
    serviceRequester: config.serviceRequester
  };

  return METHODS;
}
