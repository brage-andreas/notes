import NotFound from "./not-found.tsx";

export default async function Page({ params }: { params: { id: string } }) {
	const note = await getNote(params.id);

	if (!note) {
		return NotFound();
	}

	return (
		<div>
			<h1>TEST</h1>
		</div>
	);
}
