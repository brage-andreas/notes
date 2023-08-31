import Link from "next/link";
import DateTime from "./DateTime.tsx";

export default function Note(props: {
	id: string;
	createdAt: Date;
	content: string;
}) {
	return (
		<Link
			href={`/notes/${props.id}`}
			key={props.id}
			className="p-[0.75rem] bg-platinum rounded-md mb-[0.5rem] mr-[0.5rem] min-h-[12.5vh]"
		>
			<small className={"m-0 p-0 text-xs"}>
				<DateTime date={props.createdAt} />
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
