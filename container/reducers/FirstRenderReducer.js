export default function (state = [], action) {
	const { type, payload } = action;
	switch (type) {
		case 'IS_MOBILE_FULFILLED':
			return {
				...state,
				isMobile: payload,
			};
		default:
			return state;
	}
}
