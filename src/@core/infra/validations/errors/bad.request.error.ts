class BadRequestError extends Error {
	message: string;
	type = 'BAD_REQUEST_ERROR';

	constructor (message: string) {
		super(message);
		this.message = message;
	}
}

export default BadRequestError;
