export function formatTimes(storeHours) {
	return formatCombinedHours(combineStoreHours(storeHours));
}

function formatCombinedHours(combinedHours) {
	const abbreviations = {
		monday: 'Mon',
		tuesday: 'Tues',
		wednesday: 'Wed',
		thursday: 'Thurs',
		friday: 'Fri',
		saturday: 'Sat',
		sunday: 'Sun',
	};

	return combinedHours.map(hours => {
		let timeRange = 'CLOSED';

		const startDay = abbreviations[hours.days.start];
		const endDay = abbreviations[hours.days.end];
		const dayRange = endDay ? `${startDay}-${endDay}` : startDay;

		if (hours.dailyHours.start && hours.dailyHours.end) {
			const startTime = militaryToTwelveHour(hours.dailyHours.start);
			const endTime = militaryToTwelveHour(hours.dailyHours.end);

			timeRange = `${startTime}-${endTime}`;
		}

		return `${dayRange} ${timeRange}`;
	});
}

function combineStoreHours(storeHours) {
	const combinedHours = [];
	let lastAddedElement = { dailyHours: {}};
	const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

	dayOrder.forEach(currentDay => {
		const areStartTimesEqual = storeHours[currentDay].start === lastAddedElement.dailyHours.start;
		const areEndTimesEqual = storeHours[currentDay].end === lastAddedElement.dailyHours.end;

		if (areStartTimesEqual && areEndTimesEqual) {
			lastAddedElement.days.end = currentDay;

			return;
		}

		lastAddedElement = {
			days: { start: currentDay },
			dailyHours: storeHours[currentDay],
		};

		combinedHours.push(lastAddedElement);
	});

	return combinedHours;
}

function militaryToTwelveHour(militaryTime) {
	const twelfthHour = 1200;
	const meridian = militaryTime > twelfthHour ? 'pm' : 'am';

	let time = militaryTime > twelfthHour ? militaryTime - twelfthHour : militaryTime;

	time = time.toString();

	const penultimate = -2;
	const hours = time.slice(0, penultimate);
	const minutes = time.slice(penultimate) === '00' ? '' : `:${time.slice(penultimate)}`;

	return hours + minutes + meridian;
}
