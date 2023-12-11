import { NextResponse } from "next/server";

import { promises as fs } from 'fs';
import { Appointments, Clients } from "@/types/types";

export async function DELETE(req: Request, { params }: { params: { slug: string[] } }) {
    try {
        console.log("params", params);
        const [clientId, appointmentId] = params.slug
        console.log(clientId, appointmentId);
        const fileData = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
        const data = JSON.parse(fileData);
        const updatedData = data.map((item: Clients) => {
            if (item.id === clientId) {
                item.Appointments = item.Appointments.filter((appointment: Appointments) => appointment.id != appointmentId)
            }
            return item;
        });

        const resp = updatedData.find((item: Clients) => item.id === clientId);

        await fs.writeFile(process.cwd() + '/app/data.json', JSON.stringify(updatedData, null, 2));

        return NextResponse.json(resp, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
