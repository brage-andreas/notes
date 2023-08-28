import Link from "next/link";

const formatDate = (date: Date) =>
	new Intl.DateTimeFormat("no-NB", {
		timeZoneName: undefined,
		hour: "2-digit",
		minute: "2-digit",
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
	}).format(date);

export default function Note(props: {
	id: string;
	createdAt: Date;
	content: string;
}) {
	return (
		<Link href={`/notes/${props.id}`} key={props.id}>
			<small className={"m-0 text-xs opacity-50"}>
				{formatDate(new Date(props.createdAt))}
			</small>
			<p className={"m-0 max-w-[30ch] text-xl"}>{props.content}</p>
		</Link>
	);
}
