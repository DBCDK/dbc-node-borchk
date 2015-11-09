'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _clientJs = require('../client.js');

var Borchk = _interopRequireWildcard(_clientJs);

describe('Test Borrow check request', function () {
  it('Assert borrower result', function (done) {
    var timeout = 10000;
    this.timeout(timeout);
    setTimeout(done, timeout);

    var config = {
      wsdl: 'https://borchk.addi.dk/test_2.4/borchk.wsdl',
      serviceRequester: 'filmstriben'
    };

    Borchk.init(config);
    var result = Borchk.getBorrowerCheckResult({
      userId: '',
      userPincode: '',
      libraryCode: 'DK-716500'
    });

    done();

    result.then(function (borrowCheck) {// eslint-disable-line
      // console.log('borrowCheck ' , borrowCheck);
      // assert.equal(borrowCheck.requestStatus, 'ok');
    });
  });
});