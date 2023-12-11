import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: NextApiResponse) => {
    try {
        let newClient = await req.json();
        const filePath = path.join(process.cwd(), 'app', 'data.json');

        // Read existing data
        const fileData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileData);

        // Ensure newClient is not null before pushing
        if (newClient !== null) {
            // Add new client
            data.push(newClient);

            // Write updated data back to the file
            await fs.writeFile(filePath, JSON.stringify(data, null, 2));

            // Respond with the updated data
            return NextResponse.json(data, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Invalid newClient data' }, { status: 400 });
        }
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
};
