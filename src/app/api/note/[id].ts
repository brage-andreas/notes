import { NextResponse } from "next/server";
import prisma from "../prisma.ts";

// DELETE api/note/:id
export async function DELETE(req: Request) {
	const { id } = await req.json();

	if (!id) {
		return NextResponse.error();
	}

	const noteId = typeof id === "string" ? id : id[0];

	if (req.method !== "DELETE") {
		return NextResponse.error();
	}

	const result = await prisma.note.delete({
		where: { id: noteId }
	});

	return NextResponse.json({ data: result });
}
