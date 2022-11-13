export const SIGN_UP = async (data) => {
	try {
		return {
			status: 200,
			token: JSON.stringify(data),
		};
	} catch (err) {
		console.log('err: ', err.message);
	}
};

export const SIGN_IN = async (data) => {
	try {
		return {
			status: 200,
			token: JSON.stringify(data),
		};
	} catch (err) {
		console.log('err: ', err.message);
	}
};
