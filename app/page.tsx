import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="relative flex min-h-screen w-full max-w-7xl flex-col justify-center items-center bg-white px-16 py-32 dark:bg-black md:items-start">
        {/* Light - Desktop */}
        <Image
          className="hidden sm:block dark:hidden"
          src="/equechen-light.png"
          alt="eQuechen logo"
          width={280}
          height={100}
          priority
        />

        {/* Light - Mobile */}
        <Image
          className="block sm:hidden dark:hidden"
          src="/equechen-logo-light.png"
          alt="eQuechen logo"
          width={100}
          height={20}
          priority
        />

        {/* Dark - Desktop */}
        <Image
          className="hidden dark:sm:block"
          src="/equechen-dark.png"
          alt="eQuechen logo"
          width={280}
          height={100}
          priority
        />

        {/* Dark - Mobile */}
        <Image
          className="hidden dark:block dark:sm:hidden"
          src="/equechen-logo-dark.png"
          alt="eQuechen logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col mt-10 mb-20 items-center gap-6 text-center md:items-start md:text-left">
          <h1 className="max-w-xs sm:max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Recreational Dive Planner Web App
          </h1>

          <p className="max-w-md sm:max-w-xl text-[clamp(14px,1.2vw,18px)] leading-8 text-zinc-600 dark:text-zinc-400">
            Aplicación web desarrollada con Next.js para consultar y planificar
            inmersiones recreativas basadas en la tabla RDP (métrica).
          </p>

          <div className="max-w-md sm:max-w-xl rounded-xl border border-black/[.08] bg-zinc-50 p-5 text-left text-sm text-zinc-700 dark:border-white/[.145] dark:bg-[#0f0f0f] dark:text-zinc-300">
            <p className="font-semibold text-black dark:text-zinc-50">
              Cómo usar la app
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Accede a la sección de planificación.</li>
              <li>Introduce la profundidad máxima (metros).</li>
              <li>Introduce el tiempo de fondo (minutos).</li>
              <li>La app devolverá el límite NDL correspondiente.</li>
            </ul>
          </div>

          <p className="max-w-md sm:max-w-xl text-xs text-zinc-500 dark:text-zinc-500">
            ⚠️ Implementación técnica basada en tablas RDP con fines demostrativos.<br />
            No válida para planificación real de inmersiones.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium md:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[220px]"
            href="/planner"
          >
            Ir a planificación
          </Link>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[220px]"
            href="/rdp_table/rdp-metric-front.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver tabla RDP
          </a>
        </div>

        <Image
          className="absolute pt-55 right-16 hidden md:block opacity-50 invert dark:invert-0 pointer-events-none"
          style={{
            maxWidth: "calc(100% - 34rem)"
          }}
          src="/rdp_table/rdp-draw.png"
          alt="RDP draw"
          width={600}
          height={300}
          priority
        />
      </main>
    </div>
  );
}