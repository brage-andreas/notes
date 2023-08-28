const getNote = async (id: string) => {
	const res = await fetch(`http://localhost:3000/api/note/${id}`, {
		headers: { "Content-Type": "application/json" },
		method: "GET"
	});

	if (!res.ok) {
		return null;
	}

	const { data } = await res.json();

	return data as { id: string; createdAt: Date; content: string } | null;
};

export default async function Page({ params }: { params: { id: string } }) {
	const note = await getNote(params.id);

	return (
		<div>
			<h1>{note?.content || "Missing content"}</h1>
		</div>
	);
}
