'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _chai = require('chai');

var _clientJs = require('../client.js');

var Borchk = _interopRequireWildcard(_clientJs);

describe('Test Borrow check request', function () {
  it('The init method should throw when no config obhect is provided', function () {
    _chai.assert['throw'](Borchk.init, Error, 'A config object should be provided');
  });

  it('The init method should throw when no wsdl key is provided ', function () {
    _chai.assert['throw'](function () {
      Borchk.init({});
    }, Error, 'A wsdl key should be provided with the given config object');
  });

  it('The init method should throw when no serviceRequester key is provided ', function () {
    _chai.assert['throw'](function () {
      Borchk.init({ wsdl: 'test' });
    }, Error, 'A serviceRequester key should be provided with the given config object');
  });

  it('Init method should return object with methods when config object is properly formatted', function () {
    var obj = Borchk.init({ wsdl: 'test', serviceRequester: 'test' });
    _chai.assert.isObject(obj, 'Got object as expected');
    _chai.assert.isFunction(obj.getBorrowerCheckResult, 'Found function named getBorrowerCheckResult');
  });

  it('getBorrowerCheckResult should return a Promise', function () {
    Borchk.init({ wsdl: 'test', serviceRequester: 'test' });
    var request = Borchk.getBorrowerCheckResult({ userId: 'userid', userPincode: 'userPincode', libraryCode: 'libraryCode' });

    // Assert Promise structure in object
    _chai.assert.isNumber(request._id, 'Found number');
    _chai.assert.property(request, '_state', 'Found _state');
    _chai.assert.property(request, '_result', 'Found _state');
    _chai.assert.property(request, '_subscribers', 'Found _state');
  });
});