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
		<div className="min-w-full flex my-[3rem]">
			<form onSubmit={handleSubmit}>
				<textarea
					placeholder="Buy more bananas 🍌"
					name="newNoteContent"
					className="p-5 mr-2.5 w-[20vw] min-w-[20vw] max-h-[25vh] h-[4.25rem] min-h-[4.25rem] border-2 border-platinum rounded-md resize-none hover:resize-y"
					autoFocus
				/>

				<button
					type="submit"
					className={`p-5 bg-periwinkle border-2 border-periwinkle rounded-md align-top cursor-${
						isDone ? "pointer" : "progress"
					}`}
				>
					{isDone ? "Add" : "Working..."}
				</button>
			</form>
		</div>
	);
}
