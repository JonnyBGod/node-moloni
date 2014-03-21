var	VERSION = '0.0.1',
	Request = require("./request").Request;

function merge(defaults, options) {
	defaults = defaults || {};
	if (options && typeof options === 'object') {
		var keys = Object.keys(options);
		for (var i = 0, len = keys.length; i < len; i++) {
			var k = keys[i];
			if (options[k] !== undefined) defaults[k] = options[k];
		}
	}
	return defaults;
}


function Moloni(options) {
	if (!(this instanceof Moloni)) return new Moloni(options);

	var defaults = {
		client_id: null,
		client_secret: null,
		username: null,
		password: null,
		sandbox: false,

		headers: {
			'Accept': '*/*',
			'Connection': 'close',
			'User-Agent': 'node-moloni/' + VERSION
		},

		rest_base_host: 'api.moloni.com',
		rest_base_url: '/v1/',

		secure: false // force use of https for login/gatekeeper
	};
	this.options = merge(defaults, options);

	if (this.options.sandbox)
		this.options.rest_base_url = '/sandbox/';

	this._request = new Request(this.options);
}
Moloni.VERSION = VERSION;
module.exports = Moloni;

Moloni.prototype.users = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}

	if (call == 'updateMe') {
		var method = 'POST';
	} else {
		var method = 'GET';
	}

	this._request.executeRequest('users/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.companies = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';

	this._request.executeRequest('companies/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.countries = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';

	this._request.executeRequest('companies/'+ call, method, params, callback);
	return this;
};
Moloni.prototype.fiscalZones = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';

	this._request.executeRequest('companies/'+ call, method, params, callback);
	return this;
};
Moloni.prototype.languages = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';

	this._request.executeRequest('companies/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.subscription = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';

	this._request.executeRequest('subscription/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.customers = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('customers/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.productCategories = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('productCategories/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.products = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('products/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.bankAccounts = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('bankAccounts/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.maturityDates = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('paymentMethods/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.maturityDates = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('maturityDates/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.deliveryMethods = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('deliveryMethods/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.vehicles = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('vehicles/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.deductions = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('deductions/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.taxExemptions = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';

	this._request.executeRequest('taxExemptions/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.taxes = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('taxes/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.measurementUnits = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('measurementUnits/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.identificationTemplates = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('identificationTemplates/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.documentSets = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('documentSets/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.customerAlternateAddresses = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('customerAlternateAddresses/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.suppliers = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('suppliers/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.salesmen = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('salesmen/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.documents = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';

	this._request.executeRequest('documents/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.invoices = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('invoices/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.receipts = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('receipts/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.creditNotes = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('creditNotes/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.debitNotes = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('debitNotes/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.simplifiedInvoices = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('simplifiedInvoices/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.deliveryNotes = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete' || call == 'setTransportCode')
		method = 'POST';

	this._request.executeRequest('deliveryNotes/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.billsOfLading = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete' || call == 'setTransportCode')
		method = 'POST';

	this._request.executeRequest('billsOfLading/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.ownAssetsMovementGuides = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete' || call == 'setTransportCode')
		method = 'POST';

	this._request.executeRequest('ownAssetsMovementGuides/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.waybills = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete' || call == 'setTransportCode')
		method = 'POST';

	this._request.executeRequest('waybills/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.customerReturnNotes = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete' || call == 'setTransportCode')
		method = 'POST';

	this._request.executeRequest('customerReturnNotes/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.estimates = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('estimates/'+ call, method, params, callback);
	return this;
};

Moloni.prototype.invoiceReceipts = function(call, params, callback) {
	if (typeof params == 'function') {
		callback = params;
		params = {};
	}
	var method = 'GET';
	if (call == 'insert' || call == 'update' || call == 'delete')
		method = 'POST';

	this._request.executeRequest('invoiceReceipts/'+ call, method, params, callback);
	return this;
};