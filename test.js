(function () {
    'use strict';

    $(window).on('load', function () {
        document.getElementById('onloadtarget').innerHTML = 'My html5 test';
        var containers = document.getElementsByClassName('container');
        document.querySelector('#msg').innerHTML = containers.length;

        // only matches first result!
        var firstHeader = document.querySelector('header');
        firstHeader.innerHTML = '<h1>switched the header</h1><h2>this is silly</h2>';

        firstHeader.querySelector('h2').innerHTML = '<small>yo yo yo</small>';

    });
}());