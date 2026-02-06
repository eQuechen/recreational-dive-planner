import { PlannerForm } from "@/components/planner-form"
import { ArrowLeftToLine } from "lucide-react"
import Link from "next/link"
import { DisabledDialog } from "@/components/disabled-dialog"

export default function planner() {
    return (
        <div className="relative flex min-h-screen w-full max-w-7xl flex-col justify-center items-center bg-background px-4 sm:px-8 md:px-16 py-16 sm:py-24 md:py-32">
            <Link
                className="absolute left-[1rem] sm:left-[4rem] top-[2rem] md:top-[4rem] flex py-3 md:py-3 px-5 items-center justify-center gap-2 rounded-full bg-foreground text-background transition-all hover:opacity-90 md:w-[120px]"
                href="/"
            >
                <ArrowLeftToLine />
                Volver
            </Link>

            {/* Eliminar tras la implementación*/}
            <DisabledDialog>
                        <PlannerForm />
            </DisabledDialog>

            {/* Descomentar tras la implementación*/}
            {/* <PlannerForm /> */}
        </div>
    )
}