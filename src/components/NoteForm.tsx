"use client";

import { useState, type FormEvent } from "react";

export default function NoteForm() {
	const [isDone, setIsDone] = useState<boolean>(true);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsDone(false);

		const formData = new FormData(event.currentTarget);
		const formDataObject = Object.fromEntries(formData.entries());
		const content = formDataObject.newNoteContent.toString();

		if (!content.length) {
			setIsDone(true);

			return;
		}

		await fetch("/api/note", {
			body: JSON.stringify({ content }),
			headers: { "Content-Type": "application/json" },
			method: "POST"
		});

		setIsDone(true);
	};

	return (
		<div className="p-24 min-w-full flex items-stretch">
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Buy more bananas 🍌"
					name="newNoteContent"
					type="text"
					className="p-5 mr-2.5 min-h-22 w-300 min-w-300 self-center bg-gray-400/25 rounded-md"
					autoFocus
				></input>

				<button type="submit" className="p-5 bg-indigo-500 rounded-md">
					{isDone ? "Add" : "Working..."}
				</button>
			</form>
		</div>
	);
}
