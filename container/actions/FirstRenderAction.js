const VerifyViewPortAction = width => (dispatch) => {
	const isMobile = width < 768;
	dispatch({
		type: 'IS_MOBILE_FULFILLED',
		payload: isMobile,
	});
};

export default VerifyViewPortAction;
