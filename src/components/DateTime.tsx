import { formatDate } from "@/helpers/formatDate.ts";
import ms from "ms";

const TWO_MINUTES_MS = 120_000;

export default function DateTime(props: { date: Date }) {
	const timeDifference = Date.now() - props.date.getTime();
	const hoverText = formatDate(props.date);

	const relativeTime =
		TWO_MINUTES_MS < timeDifference
			? `${ms(timeDifference, { long: true })} ago`
			: "Now";

	return <span title={hoverText}>{relativeTime}</span>;
}
