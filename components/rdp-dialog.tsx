"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function RdpDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="flex h-12 w-full items-center justify-center rounded-full border border-border px-5 transition-colors hover:bg-accent hover:text-accent-foreground md:w-[220px]"
                >
                    Ver tabla RDP
                </Button>
            </DialogTrigger>

            <DialogContent className="!sm:max-w-9xl">
                <DialogHeader>
                    <DialogTitle>Tabla RDP (Métrica)</DialogTitle>
                </DialogHeader>

                <Carousel className="">
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src="/rdp_table/rdp-metric-front.png"
                                alt="Tabla RDP frontal"
                                width={622}
                                height={466}
                                className="w-full rounded-lg border border-border"
                                priority
                            />
                        </CarouselItem>

                        <CarouselItem>
                            <Image
                                src="/rdp_table/rdp-metric-back.png"
                                alt="Tabla RDP trasera"
                                width={622}
                                height={466}
                                className="w-full rounded-lg border border-border"
                                priority
                            />
                        </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </DialogContent>
        </Dialog>
    );
}