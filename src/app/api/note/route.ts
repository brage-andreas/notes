import { NextResponse } from "next/server";
import prisma from "../prisma.ts";

// POST api/note
export async function POST(req: Request) {
	const { content } = await req.json();

	if (typeof content !== "string") {
		return NextResponse.error();
	}

	const result = await prisma.note.create({
		data: { content: content || "Shh..." }
	});

	return NextResponse.json({ data: result });
}
