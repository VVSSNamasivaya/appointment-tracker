import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clients } from "@/types/types"
import Link from "next/link"
type Props = {
    client: Clients
    deleteClient: any
}
export function ClientCards({ client, deleteClient }: Props) {

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>{client.FirstName + " " + client.LastName}</CardTitle>
                    <button onClick={() => { deleteClient(client.id) }}>
                        <DeleteIcon className="w-4 h-4" />
                    </button>
                </div>
                <CardDescription>{client.Location}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between">
                <Link href={`/appointment/${client.id}`}>
                    <Button size="sm" className="bg-black text-white">View Appointments</Button>
                </Link>
                <Link href={`/appointment/create/${client.id}`}>
                    <Button size="sm" className="bg-black text-white">Add Appointment</Button>
                </Link>
            </CardContent>
        </Card>
    )
}


function DeleteIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
            <line x1="18" x2="12" y1="9" y2="15" />
            <line x1="12" x2="18" y1="9" y2="15" />
        </svg>
    )
}
