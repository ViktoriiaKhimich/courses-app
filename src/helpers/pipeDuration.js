export const pipeDuration = (mins) => {
	let duration;
	if (mins) {
		duration =
			`0${(mins / 60) ^ 0}`.slice(-2) +
			':' +
			('0' + (mins % 60)).slice(-2) +
			' hours';
	} else {
		duration = '00:00 hours';
	}
	return duration;
};
