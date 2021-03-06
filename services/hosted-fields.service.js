import braintree from 'braintree-web';

export const hostedFieldsService = {
	create,
};

class HostedFields {
	constructor(hostedFields) {
		this._hostedFields = hostedFields;
	}

	on(event, callback) {
		this._hostedFields.on(event, callback);
	}

	isValid() {
		const fields = this._hostedFields.getState().fields;

		return Object.keys(fields).every(key => fields[key].isValid);
	}

	getNonce() {
		return this._hostedFields.tokenize()
			.then(payload => {
				return { ...payload.details, nonce: payload.nonce };
			});
	}
}

function create(authorization, fields, styles) {
	const options = {
		authorization,
		fields,
		styles,
	};

	return braintree.hostedFields.create(options)
		.then(hostedFields => new HostedFields(hostedFields));
}
