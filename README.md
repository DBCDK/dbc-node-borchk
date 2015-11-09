# dbc-node-borchk

[![David](https://img.shields.io/david/DBCDK/dbc-node-borchk.svg?style=flat-square)](https://david-dm.org/DBCDK/dbc-node-borchk#info=dependencies)
[![David](https://img.shields.io/david/dev/DBCDK/dbc-node-borchk.svg?style=flat-square)](https://david-dm.org/DBCDK/dbc-node-borchk#info=devDependencies)

Node borrow check wrapper module for the DBC webservice [https://borchk.addi.dk/](https://borchk.addi.dk/).

BORCHK is a web service used by systems and interfaces for lookup in library borrower records, to verify whether a user is enrolled, and whether he is a citizen of the municipality.  

## Borchk.getBorrowerCheckResult(values):Promise
Method for creating a borrow check request for a specific user.

This method returns a borrow check result from the webservice containing simple response which can be "ok" or "borrower_not_found".

Example:
```javascript
params = {
  userId: '',
  userPincode: ''
};

Borchk.getBorrowerCheckResult(params);

```
