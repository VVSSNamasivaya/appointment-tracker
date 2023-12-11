/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/CDv42BfGLdf
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import { Clients } from "@/types/types"
import Link from "next/link"
type Props = {
    props: Clients
    deleteAppointment: any
}
export function Appointments({ props, deleteAppointment }: Props) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">{props.FirstName + " " + props.LastName} Appointments </h1>
                <Link href={`/appointment/create/${props.id}/`}>
                <Button variant="outline">
                    <PlusIcon className="mr-1 h-4 w-4 -translate-x-1" />
                    New Appointment
                </Button>
                </Link>
            </div>
            <div className="grid gap-6">
                {
                    props.Appointments?.map((appointment, idx) => {
                        const date = new Date(appointment.Date).toDateString();
                        const timeString = appointment.Time
                        const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            )
                        return (
                            <Card key={appointment.id}>
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle>Appointment {idx + 1}</CardTitle>
                                        <Button variant="outline" onClick={() => { deleteAppointment(props.id, appointment.id) }}>
                                            <TrashIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <CardDescription>
                                        <CalendarIcon className="mr-1 h-4 w-4 -translate-x-1" />
                                        {date}, {timeString12hr}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}


function CalendarIcon(props: any) {
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
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
    )
}


function PlusIcon(props: any) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}

function TrashIcon(props: any) {
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}
