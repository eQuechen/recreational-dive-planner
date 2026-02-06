import { PlannerForm } from "@/components/planner-form"
import { ArrowLeftToLine } from "lucide-react"
import Link from "next/link"

export default function planner() {
    return (
        <div className="relative flex min-h-screen w-full max-w-7xl flex-col justify-center items-center bg-background px-16 py-32 ">
            <Link
                className="absolute top-[8rem] left-[4rem] flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-all hover:opacity-90 md:w-[120px]"
                href="/"
            >
                <ArrowLeftToLine />
                Volver
            </Link>

            {/* Borrar este div tras la implementación */}
            <div className="relative">
                {/* Overlay */}
                <div className="absolute inset-0 z-50 flex items-center justify-center cursor-not-allowed group">
                    <span className="text-white font-bold text-lg">
                    </span>

                    {/* Tooltip */}
                    <div className="absolute hidden group-hover:block bg-foreground text-background text-sm px-3 py-10 rounded shadow-lg">
                        En fase de implementación, no disponible.
                    </div>
                </div>

                {/* Formulario */}
                <div className="pointer-events-none">
                    <PlannerForm />
                </div>
            </div>

            {/* Descomentar tras la implementación*/}
            {/* <PlannerForm /> */}
        </div>
    )
}