export default function objectDefaultGuard(data: unknown): data is Record<string, unknown> {
	if (!(typeof data === 'object' && data !== null)) {
		return false;
	}
	return true;
}