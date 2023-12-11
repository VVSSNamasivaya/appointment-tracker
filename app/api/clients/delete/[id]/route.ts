import { NextResponse } from "next/server";

import { promises as fs } from 'fs';
import { Clients } from "@/types/types";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const fileData = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
        const data = JSON.parse(fileData);
        const updatedData = data.filter((item: Clients) => item.id != id);

        await fs.writeFile(process.cwd() + '/app/data.json', JSON.stringify(updatedData, null, 2));

        return NextResponse.json(updatedData, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
