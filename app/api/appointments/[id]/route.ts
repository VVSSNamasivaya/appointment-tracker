import { NextResponse } from "next/server";

import { promises as fs } from 'fs';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const fileData = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
        const data = JSON.parse(fileData);
        const item = data.find((item: any) => item.id === id);

        return NextResponse.json(item, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
