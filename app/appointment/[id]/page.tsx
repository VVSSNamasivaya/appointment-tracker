"use client"
import { Appointments } from "@/components/appointments";
import { Navbar } from "@/components/navbar";
import { Clients } from "@/types/types";
import { useState, useEffect } from "react";

export default function Appointment({ params }: any) {
    const [appointments, setAppointments] = useState<Clients | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    console.log(params)

    useEffect(() => {
        const fetchAppointments = async (id: string) => {
            try {
                const response = await fetch(`http://localhost:3000/api/appointments/${id}`);
                if (!response.ok) {
                    setError("An error occurred");
                }

                const data = await response.json();
                setAppointments(data);
            } catch (err: any) {
                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments(params.id);
    }, [params.id]);

    const deleteAppointment = async (clientId: string, appointmentId: string) => {
        const res = await fetch(`/api/appointments/delete/${clientId}/${appointmentId}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if(data){
            setAppointments(data)
        }
    }
    return (
        <>
            <Navbar />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {appointments && <Appointments props={appointments} deleteAppointment={deleteAppointment} />}
        </>
    );
}
