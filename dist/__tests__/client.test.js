'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _clientJs = require('../client.js');

var _clientJs2 = _interopRequireDefault(_clientJs);

describe('Test Borrow check request', function () {
  it('The init method should throw when no config obhect is provided', function () {
    _chai.assert['throw'](_clientJs2['default'], Error, 'A config object should be provided');
  });

  it('The init method should throw when no wsdl key is provided ', function () {
    _chai.assert['throw'](function () {
      (0, _clientJs2['default'])({});
    }, Error, 'A wsdl key should be provided with the given config object');
  });

  it('The init method should throw when no serviceRequester key is provided ', function () {
    _chai.assert['throw'](function () {
      (0, _clientJs2['default'])({ wsdl: 'test' });
    }, Error, 'A serviceRequester key should be provided with the given config object');
  });

  it('Init method should return object with methods when config object is properly formatted', function () {
    var obj = (0, _clientJs2['default'])({ wsdl: 'test', serviceRequester: 'test' });
    _chai.assert.isObject(obj, 'Got object as expected');
    _chai.assert.isFunction(obj.getBorrowerCheckResult, 'Found function named getBorrowerCheckResult');
  });

  it('getBorrowerCheckResult should return a Promise', function () {
    var borchk = (0, _clientJs2['default'])({ wsdl: 'test', serviceRequester: 'test' });
    var request = borchk.getBorrowerCheckResult({ userId: 'userid', userPincode: 'userPincode', libraryCode: 'libraryCode' });

    // Assert Promise structure in object
    _chai.assert.isNumber(request._id, 'Found number');
    _chai.assert.property(request, '_state', 'Found _state');
    _chai.assert.property(request, '_result', 'Found _state');
    _chai.assert.property(request, '_subscribers', 'Found _state');
  });
});