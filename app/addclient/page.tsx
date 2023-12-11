"use client";
import { FormUI } from "@/components/form-ui";
import { Navbar } from "@/components/navbar";

export default function Home() {
    console.log("hello")
    return (
        <>
            <Navbar />
            <FormUI />
        </>
    )
}
