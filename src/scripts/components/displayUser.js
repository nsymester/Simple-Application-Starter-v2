// displayUser.js
'use strict';

const $ = require('jquery');
const fetchCurrentUser = require('./fetchCurrentUser.js');

// Listen to a click event
$('#button').click(() => {
  // fetches some data asynchronously
  fetchCurrentUser(user => {
    const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');

    // set the content of a <span>
    $('#username').text(user.fullName + ' - ' + loggedText);
  });
});
