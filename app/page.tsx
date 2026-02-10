import Image from "next/image";
import Link from "next/link";
import { RdpDialog } from "@/components/rdp-dialog";

export default function Home() {
  return (
<main className="min-h-screen w-full max-w-7xl mx-auto flex flex-col items-center justify-center md:items-start py-8 md:py-16">
        {/* Light - Desktop */}
        <Image
          className="hidden sm:block dark:hidden"
          src="/equechen-light.png"
          alt="eQuechen logo"
          width={280}
          height={100}
        />

        {/* Light - Mobile */}
        <Image
          className="block sm:hidden dark:hidden"
          src="/equechen-logo-light.png"
          alt="eQuechen logo"
          width={100}
          height={100}
        />

        {/* Dark - Desktop */}
        <Image
          className="hidden dark:sm:block"
          src="/equechen-dark.png"
          alt="eQuechen logo"
          width={280}
          height={97}
        />

        {/* Dark - Mobile */}
        <Image
          className="hidden dark:block dark:sm:hidden"
          src="/equechen-logo-dark.png"
          alt="eQuechen logo"
          width={100}
          height={100}
        />

        <div className="flex flex-col mt-5 mb-10 items-center gap-6 text-center md:items-start md:text-left">
          <h1 className="max-w-xs sm:max-w-xl text-3xl font-semibold leading-10 tracking-tight text-foreground">
            Recreational Dive Planner Web App
          </h1>

          <p className="max-w-md sm:max-w-xl text-[clamp(14px,1.2vw,18px)] leading-8 text-muted-foreground">
            Consulta y planifica inmersiones recreativas basadas en tablas RDP (métrica).
          </p>

          <div className="max-w-md sm:max-w-xl rounded-xl border p-5 text-left text-sm border-border bg-muted text-muted-foreground">
            <p className="font-semibold text-foreground">
              Cómo usar la app
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Accede a la planificación.</li>
              <li>Introduce la profundidad máxima.</li>
              <li>La app devolverá el límite NDL.</li>
              <li>Introduce el tiempo de fondo.</li>
              <li>La app devolverá el grupo de presión.</li>
            </ul>
          </div>

          <p className="max-w-md sm:max-w-xl text-xs text-muted-foreground">
            ⚠️ Basada en tablas RDP con fines demostrativos.<br />
            No válida para planificación real de inmersiones.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium md:flex-row">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground text-background transition-all hover:opacity-90 md:w-[220px] py-3 md:py-3 px-5"
            href="/planner"
          >
            Ir a planificación
          </Link>

          <RdpDialog />
        </div>

        <Image
          className="absolute pt-55 self-end hidden md:block opacity-50 invert dark:invert-0 pointer-events-none"
          style={{
            maxWidth: "calc(100% - 34rem)"
          }}
          src="/rdp_table/rdp-draw.png"
          alt="RDP draw"
          width={600}
          height={338}
        />
      </main>
  );
}