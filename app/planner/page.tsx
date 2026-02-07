import { PlannerForm } from "@/components/planner-form"
import { ArrowLeftToLine } from "lucide-react"
import Link from "next/link"
import { DisabledDialog } from "@/components/disabled-dialog"

export default function planner() {
    return (
        <main className="relative w-full max-w-7xl mx-auto py-8 md:py-16">
            <Link
                className="flex py-3 md:py-3 px-5 items-center justify-center gap-2 rounded-full bg-foreground text-background transition-all hover:opacity-90 w-[120px]"
                href="/"
            >
                <ArrowLeftToLine />
                Volver
            </Link>


            <div className="flex justify-center">

                 {/* Descomentar tras la implementación*/}
                {/* <PlannerForm /> */}

                {/* Eliminar tras la implementación*/}
                <DisabledDialog>
                    <PlannerForm />
                </DisabledDialog>

            </div>

        </main>
    )
}