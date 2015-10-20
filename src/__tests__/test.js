'use strict';

import * as Borchk from '../client.js';

describe('Test Borrow check request', () => {
  it('Assert borrower result', function(done) {
    const timeout = 10000;
    this.timeout(timeout);
    setTimeout(done, timeout);

    const config = {
      wsdl: 'https://borchk.addi.dk/test_2.4/borchk.wsdl',
      serviceRequester: 'filmstriben'
    };

    Borchk.init(config);
    let result = Borchk.getBorrowerCheckResult({
      userId: '',
      userPincode: '',
      libraryCode: 'DK-716500'
    });

    done();

    result.then(function(borrowCheck) { // eslint-disable-line
      // console.log('borrowCheck ' , borrowCheck);
      // assert.equal(borrowCheck.requestStatus, 'ok');
    });
  });
});
