import { v4 } from 'uuid';

export function uuid() {
	return v4();
}

export function isValidUuid(uuid: string) {
	const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return UUID_PATTERN.test(uuid);
}
