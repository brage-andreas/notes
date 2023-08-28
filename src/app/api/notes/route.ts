import { NextResponse } from "next/server";
import prisma from "../prisma.ts";

// GET api/notes
export async function GET() {
	const result = await prisma.note.findMany({
		orderBy: {
			createdAt: "desc"
		}
	});

	return NextResponse.json({ data: result });
}
