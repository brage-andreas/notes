export const formatDate = (date: Date) =>
	new Intl.DateTimeFormat("no-NB", {
		timeZoneName: undefined,
		hour: "2-digit",
		minute: "2-digit",
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
	}).format(date);
