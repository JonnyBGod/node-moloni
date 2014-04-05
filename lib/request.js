/**
 * Request data from the API
 */

var https = require("https");
var querystring = require('querystring');

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

Request.prototype.executeRequest = function(route, call, parameters, callback) {
	if (!this.credentials || !this.credentials.access_token || !this.credentials || this.credentials.expires < new Date()) {
		var that = this;
		that.authenticate(function (error, result) {
			if (error) return callback(error);

			that.credentials = result;
			that.credentials.expires = new Date()+ (3590*1000);

			that.executeRequest(route, call, parameters, callback);
		});
	} else {
		var method = 'POST';
		var headers = this.headers;

		if (parameters && call != 'getMe' || parameters && call == 'getAll' && route != 'companies') {
			var data = querystring.stringify(parameters);
			headers['Content-Type'] = 'application/x-www-form-urlencoded';
			headers['Content-Length'] = Buffer.byteLength(data);
		} else {
			method = 'GET';
			parameters = false;
		}

		var req = https.request({hostname: this.host, path: this.baseUrl+route+'/'+call+'/?access_token='+this.credentials.access_token, method: method, headers: headers }, function(res) {
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
		if (parameters)
			req.write(data);
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

	https.get({hostname: this.host, path: this.baseUrl+'grant/?'+querystring.stringify(parameters), headers: this.headers }, function(res) {
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