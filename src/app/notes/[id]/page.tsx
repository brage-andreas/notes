import { formatDate } from "@/helpers/formatDate.ts";
import Link from "next/link";

const getNote = async (id: string) => {
	const res = await fetch(`http://localhost:3000/api/note/${id}`, {
		headers: { "Content-Type": "application/json" },
		method: "GET"
	});

	if (!res.ok) {
		return null;
	}

	const json = await res.json();

	const data = { ...json.data, createdAt: new Date(json.data.createdAt) };

	return data as { id: string; createdAt: Date; content: string } | null;
};

export default async function Page({ params }: { params: { id: string } }) {
	const note = await getNote(params.id);

	return (
		<div className="mb-[5vh]">
			<Link href="/" className="">
				<button
					type="button"
					className="my-[0.5rem] rounded-md bg-orange-400/80 p-[0.5rem] uppercase text-sm font-extrabold"
				>
					← Back
				</button>
			</Link>

			<h1 className="text-sm uppercase font-extrabold mt-[1rem]">
				Your note
			</h1>
			<sub>
				<p className="text-xs text-opacity-50 mb-[1rem]">
					{note ? note.id : "Missing ID"} •{" "}
					{note
						? `Created at ${formatDate(note.createdAt)}`
						: "Missing date"}
				</p>
			</sub>
			<p className="rounded-md bg-orange-400/80 p-[0.5rem] min-h-[12.5vh]">
				{note?.content || "Missing content"}
			</p>
		</div>
	);
}
