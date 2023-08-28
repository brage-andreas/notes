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
		<Link
			href={`/notes/${props.id}`}
			key={props.id}
			className="p-[0.75rem] bg-gray-400/40 rounded-md mb-[0.5rem] mr-[0.5rem] min-h-[12.5vh]"
		>
			<small className={"m-0 p-0 text-xs opacity-50 font-light "}>
				{formatDate(new Date(props.createdAt))}
			</small>
			<p
				className={
					"m-0 mb-5 max-w-[50ch] min-h-max text-xl overflow-auto truncate"
				}
			>
				{props.content}
			</p>
		</Link>
	);
}
