import { formatDate } from "@/helpers/formatDate.ts";
import Link from "next/link";
import { FaArrowLeft, FaPenToSquare, FaTrash } from "react-icons/fa6";

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
			<Link
				href="/"
				className="my-[0.5rem] p-[0.5rem] rounded-md bg-platinum text-sm font-extrabold flex items-center w-fit gap-[0.5ch]"
			>
				<FaArrowLeft size="0.875rem" /> BACK
			</Link>

			<article>
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
				<p className="rounded-md bg-periwinkle p-[0.5rem] min-h-[12.5vh]">
					{note?.content || "Missing content"}
				</p>
			</article>

			<section className="flex justify-end gap-[0.5rem] mt-[1ch]">
				<button className="flex items-center w-fit cursor-not-allowed gap-[0.5ch] px-[0.5rem] py-[0.25rem] rounded-md bg-platinum">
					<FaPenToSquare size="0.875rem" /> Edit
				</button>
				<button className="flex items-center w-fit gap-[0.5ch] px-[0.5rem] py-[0.25rem] rounded-md bg-platinum">
					<FaTrash size="0.875rem" /> Delete
				</button>
			</section>
		</div>
	);
}
