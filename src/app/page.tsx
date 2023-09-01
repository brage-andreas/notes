import NoteComponent from "@/components/Note";
import NoteForm from "@/components/NoteForm";
import { type Note } from "@prisma/client";

export const getData = async () => {
	const res = await fetch("http://localhost:3000/api/notes/", {
		headers: { "Content-Type": "application/json" },
		method: "GET"
	});

	const json = await res.json();

	return json.data.map(
		(e: { id: string; createdAt: string; content: string }) => ({
			...e,
			createdAt: new Date(e.createdAt)
		})
	) as Array<Note>;
};

export default async function Home() {
	const data = await getData();

	return (
		<main className="min-w-full min-h-[80vh]">
			<NoteForm />

			<article>
				<h2 className="uppercase font-bold">Your notes</h2>
				<p className="text-sm mb-[1rem] text-inherit/50">
					{data.length} note{data.length === 1 ? "" : "s"}
				</p>
				<section className="flex flex-col items-center justify-between mt-26">
					<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
						{data.map((noteData) => NoteComponent(noteData))}
					</div>
				</section>
			</article>
		</main>
	);
}
