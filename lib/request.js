/**
 * Request data from the API
 */

var https = require("https");

var Request = function Request(options) {
	this._configure(options);
};

Request.prototype._configure = function(options) {
	this.client_id		= options.client_id;
	this.client_secret	= options.client_secret;
	this.username		= options.username;
	this.password		= options.password;
	this.credentials	= null;
	this.baseUrl		= options.rest_base_url;
	this.host			= options.rest_base_host;
	this.headers		= options.headers;
};

Request.prototype.executeRequest = function(url, method, parameters, callback) {
	if (!this.credentials || !this.credentials.access_token || !this.credentials || this.credentials.expires < new Date()) {
		var that = this;
		that.authenticate(function (error, result) {
			if (error) return callback(error);

			that.credentials = result;
			that.credentials.expires = new Date()+ (3590*1000);

			that.executeRequest(url, method, parameters, callback);
		});
	} else {
		var parameterString	= '?';
		if (parameters === undefined) {
			parameters = {};
		}

		parameters.access_token = this.credentials.access_token;

		var operator = '';
		for (var key in parameters) {
			parameterString	+= (operator + key + '=' + parameters[key]);
			if ( operator === '' ) {
				operator = '&';
			}
		}

		if (this.baseUrl == '/sandbox/')
			method = 'GET';

		var req = https.request({hostname: this.host, path: this.baseUrl+url+'/'+parameterString, method: method, headers: this.headers }, function(res) {
			var chunks	= '';
			res.on('data', function(resultData) {
				chunks	+= resultData;
			});
			res.on('end', function() {
				if (JSON.parse(chunks).error)
					return callback(JSON.parse(chunks));
				callback(null, JSON.parse(chunks));
			});
		})
		req.end();

		req.on('error', function(error) {
			callback(error);
		});
	}
};

Request.prototype.authenticate = function(callback) {
	var parameters = {};
	parameters.grant_type = 'password';
	parameters.client_id = this.client_id;
	parameters.client_secret = this.client_secret;
	parameters.username = this.username;
	parameters.password = this.password;

	var parameterString	= '';

	var operator = '';
	for (var key in parameters) {
		parameterString	+= (operator + key + '=' + parameters[key]);
		if ( operator === '' ) {
			operator = '&';
		}
	}

	https.get({hostname: this.host, path: this.baseUrl+'grant/?'+parameterString, headers: this.headers }, function(res) {
		if (res.statusCode && res.statusCode === 200) {
			var chunks	= '';
			res.on('data', function(resultData) {
				chunks	+= resultData;
			});
			res.on('end', function() {
				callback(null, JSON.parse(chunks));
			});
		} else {
			callback({code: res.StatusCode});
		}
	}).on('error', function(error) {
		callback(error);
	});
};

exports.Request = Request;