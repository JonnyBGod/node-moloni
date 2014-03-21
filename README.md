Moloni API client library for node.js
======================================

[node-moloni](https://github.com/JonnyBGod/node-moloni) aims to provide a complete, asynchronous client library for the Moloni API services (https://www.moloni.com/dev/).

## Requirements

You can install node-moloni and its dependencies with npm: `npm install moloni`.

- [node](http://nodejs.org/) v0.10+ (earlier versions of node were not tested but it should work as soon as 0.6)

## Getting started

	var Moloni = require('moloni');
	var moloni = new Moloni({
		client_id: 'YOUR_CLIENT_ID',
		client_secret: 'YOUR_CLIENT_SECRET',
		username: 'YOUR_USERNAME',
		password: 'YOUR_PASSWORD'
	});


### Make an API call

	moloni.users('getMe', function (error, result) {
		if (error)
			return console.error(error);

		console.log(result);
	});


### Getting something more complex done
	
	var params = {
		...
	};

	moloni.customers('insert', params, function (error, result) {
		if (error)
			return console.error(error);

		console.log(result);
	});


### Sandbox mode for testing

You can just pass "sandbox: true" to initialize in sandbox mode.

	var moloni = new Moloni({
		client_id: 'YOUR_CLIENT_ID',
		client_secret: 'YOUR_CLIENT_SECRET',
		username: 'YOUR_USERNAME',
		password: 'YOUR_PASSWORD',
		sandbox: true
	});


## Contributors

- [João Ribeiro](https://github.com/JonnyBGod) (author)
- Lots of [wonderful helper elves](https://github.com/JonnyBGod/node-moloni/contributors) on GitHub

## TODO

- Add tests for all endpoints as described at (https://www.moloni.com/dev/)
- Test all endpoints as described at (https://www.moloni.com/dev/)
- Clean up code
- Fix ALL THE THINGS! on the GitHub [issues list](https://github.com/JonnyBGod/node-moloni/issues)