import { NextResponse, type NextRequest } from "next/server";
import prisma from "../../prisma.ts";

// GET api/note/:id
export async function GET(req: NextRequest) {
	// probably bad practice
	const id = req.url.split("/").at(-1);

	if (!id) {
		return NextResponse.error();
	}

	const result = await prisma.note.findUnique({
		where: { id }
	});

	return NextResponse.json({ data: result });
}

// DELETE api/note/:id
export async function DELETE(req: NextRequest) {
	// probably bad practice
	const id = req.url.split("/").at(-1);

	if (!id) {
		return NextResponse.error();
	}

	const result = await prisma.note.delete({
		where: { id }
	});

	return NextResponse.json({ data: result });
}
