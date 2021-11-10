"use strict";
var bt = document.querySelector('#btn');
bt.addEventListener('click', function (e) {
    e.preventDefault();
    var body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', '<h2>😄</h2>');
});
