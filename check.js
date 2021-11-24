

// MD5 : A JavaScript function for hashing messages with MD5.

// Installation :- npm install md5

var md5 = require('md5');
 
console.log(md5('message'));

// This will print the following :- 78e731027d8fd50ed642340b7c9a63b3


/* salting and Hashing */

// password + salt == hash + salt = hash + salt = ... is called as salt Rounds.


const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});





