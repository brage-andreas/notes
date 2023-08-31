import { formatDate } from "@/helpers/formatDate.ts";
import ms from "ms";

export default function DateTime(props: { date: Date }) {
	const hoverText = formatDate(props.date);
	const relativeTime = ms(Date.now() - props.date.getTime(), { long: true });

	return <span title={hoverText}>{relativeTime} ago</span>;
}
