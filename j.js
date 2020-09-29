
var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
}

address = system.args[1];
page.open(address, function () {
    page.render('example.png');
    phantom.exit();
});
