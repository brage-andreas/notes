import NoteForm from "@/components/NoteForm";
import Note from "@/components/note.tsx";

const getNotes = async () => {
	const res = await fetch("http://localhost:3000//api/notes/", {
		headers: { "Content-Type": "application/json" },
		method: "GET"
	});

	const { data } = await res.json();

	return data as Array<{ id: string; createdAt: Date; content: string }>;
};

export default async function Home() {
	const data = await getNotes();

	return (
		<main className="m-34 min-w-full min-h-screen">
			<div className="flex flex-col items-center justify-between p-24">
				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left">
					{data.map((noteData) => Note(noteData))}
				</div>
			</div>

			<NoteForm />
		</main>
	);
}
