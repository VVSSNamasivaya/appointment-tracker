"use client"
import { Navbar } from "@/components/navbar";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Appointments } from "@/types/types";
import { useRouter } from "next/navigation";

export default function Page({ params }: any) {
    const router = useRouter()
    const randId = () => {
        return Math.random().toString(36).substr(2, 9);
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        let appointmenttime = formData.get("appointment-time")
        let appointmentdate = formData.get("appointment-date")
        let appointment: Appointments = {
            id: randId(),
            Date: appointmentdate as string,
            Time: appointmenttime as string,
        }

        await fetch(`/api/appointments/create/${params.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment)
        })
        router.push(`/appointment/${params.id}`)
    }

    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <Card className="max-w-lg mx-auto p-8 space-y-4">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Appointment Form</CardTitle>
                        <CardDescription className="text-gray-500">Fill out the form to book your appointment.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="appointment-date">Appointment Date</Label>
                                <Input className="w-full" id="appointment-date" name="appointment-date" placeholder="Select date" type="date" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="appointment-time">Appointment Time</Label>
                                <Input className="w-full" id="appointment-time" name="appointment-time" placeholder="Select time" type="time" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" type="submit">
                            Submit
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </>
    );
}
