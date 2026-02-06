import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"

import { Input } from "./ui/input"
import { Switch } from "./ui/switch"
import { Button } from "./ui/button";

export function PlannerForm() {
    return (
        <FieldSet>
            <FieldLegend>RDP digital</FieldLegend>
            <FieldDescription>⚠️ NO válida para planificación real de inmersiones.</FieldDescription>
            <FieldGroup>
                <Field orientation="horizontal" className="w-fit">
                    <Switch id="switch" />
                    <FieldLabel htmlFor="switch">Inmersión sucesiva</FieldLabel>
                </Field>

                <Field>
                    <FieldLabel htmlFor="depth">Profundidad máxima (m)</FieldLabel>
                    <Input type="number" id="depth" autoComplete="off" placeholder="ej: 18" />
                    <FieldDescription></FieldDescription>
                </Field>

                <Field>
                    <FieldLabel htmlFor="bottom-time">Tiempo de fondo (min)</FieldLabel>
                    <Input type="number" id="bottom-time" autoComplete="off" placeholder="ej: 35" />
                    <FieldDescription></FieldDescription>
                </Field>

                <Field className="flex flex-col md:flex-row gap-4">
                    <Button className="md:flex-4" size="lg" type="submit">Calcular NDL</Button>
                    <Button className="md:flex-1" size="lg" variant="outline" type="button">
                        Borrar
                    </Button>
                </Field>
            </FieldGroup>
        </FieldSet>
    );
}

