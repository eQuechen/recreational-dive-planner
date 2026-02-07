"use client"

import { useState } from "react";

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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "./ui/select";

import { Input } from "./ui/input"
import { Switch } from "./ui/switch"
import { Button } from "./ui/button";

export function PlannerForm() {

    const [successiveDive, setSuccessiveDive] = useState<boolean>(false);

    return (
        <FieldSet className="w-full max-w-md my-10">
            <FieldLegend>RDP digital</FieldLegend>
            <FieldDescription>⚠️ NO válida para planificación real de inmersiones.</FieldDescription>
            <FieldGroup>

                {/* Successive dive toggle switch */}
                <Field orientation="horizontal" className="w-fit">
                    <Switch
                        id="successive-dive"
                        checked={successiveDive}
                        onCheckedChange={setSuccessiveDive} />
                    <FieldLabel htmlFor="successive-dive">Inmersión sucesiva</FieldLabel>
                </Field>

                {/* Only when the "Successive dive" switch is enabled. */}
                <div className={`overflow-hidden space-y-7 transition-all duration-300 ease-in-out ${successiveDive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>

                    {/* Current pressure group field */}
                    <Field>
                        <FieldLabel htmlFor="current-group">Grupo de presión actual</FieldLabel>
                        <Select>
                            <SelectTrigger id="current-group">
                                <SelectValue placeholder="Selecciona grupo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="A">A</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                                <SelectItem value="C">C</SelectItem>
                                <SelectItem value="D">D</SelectItem>
                                <SelectItem value="E">E</SelectItem>
                                <SelectItem value="F">F</SelectItem>
                                <SelectItem value="G">G</SelectItem>
                                <SelectItem value="H">H</SelectItem>
                                <SelectItem value="I">I</SelectItem>
                                <SelectItem value="J">J</SelectItem>
                                <SelectItem value="K">K</SelectItem>
                                <SelectItem value="L">L</SelectItem>
                                <SelectItem value="M">M</SelectItem>
                                <SelectItem value="N">N</SelectItem>
                                <SelectItem value="O">O</SelectItem>
                                <SelectItem value="P">P</SelectItem>
                                <SelectItem value="Q">Q</SelectItem>
                                <SelectItem value="R">R</SelectItem>
                                <SelectItem value="S">S</SelectItem>
                                <SelectItem value="T">T</SelectItem>
                                <SelectItem value="U">U</SelectItem>
                                <SelectItem value="V">V</SelectItem>
                                <SelectItem value="W">W</SelectItem>
                                <SelectItem value="X">X</SelectItem>
                                <SelectItem value="Y">Y</SelectItem>
                                <SelectItem value="Z">Z</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>

                    {/* Surface interval field*/}
                    <Field>
                        <FieldLabel htmlFor="surface-interval">Intervalo en superficie (min)</FieldLabel>
                        <Input
                            type="number"
                            id="surface-interval"
                            autoComplete="off"
                            placeholder="ej: 60"
                            min={1}
                            max={219}
                        />
                    </Field>

                    {/* Pre-dive pressure group field */}
                    <Field>
                        <FieldLabel htmlFor="prev-group">
                            Grupo de presión pre-inmersión
                        </FieldLabel>
                        <Input
                            type="text"
                            id="prev-group"
                            autoComplete="off"
                            placeholder="-"
                            className="max-w-15 text-center"
                            readOnly
                        />
                    </Field>
                </div>

                {/* Depth field */}
                <Field>
                    <FieldLabel htmlFor="depth">
                        Profundidad máxima (m)
                    </FieldLabel>
                    <Input
                        type="number"
                        id="depth"
                        autoComplete="off"
                        placeholder="ej: 18"
                        min={1}
                        max={40}
                        step={1}
                    />
                    <FieldDescription></FieldDescription>
                </Field>

                {/* NDL field */}
                <Field>
                        <FieldLabel htmlFor="ndl">
                            Límite de no descompresión (NDL)
                        </FieldLabel>
                        <div className="flex items-center gap-2">
                            <Input
                                type="text"
                                id="ndl"
                                autoComplete="off"
                                placeholder="-"
                                className="max-w-15 text-center"
                                readOnly
                            />
                            <span className="text-sm text-muted-foreground">
                                min
                            </span>
                        </div>
                </Field>

                {/* Bottom time field */}
                <Field>
                    <FieldLabel htmlFor="bottom-time">Tiempo de fondo (min)</FieldLabel>
                    <Input type="number" id="bottom-time" autoComplete="off" placeholder="ej: 35" />
                    <FieldDescription></FieldDescription>
                </Field>

                {/* Post-dive pressure group field */}
                <Field>
                        <FieldLabel htmlFor="post-group" className="pr-4">
                            Grupo de presión post-inmersión
                        </FieldLabel>
                        <Input
                            type="text"
                            id="post-group"
                            autoComplete="off"
                            placeholder="-"
                            className="max-w-15 text-center"
                            readOnly
                        />
                </Field>

                {/* Interactive buttons */}
                <Field className="flex flex-col md:flex-row gap-4">
                    <Button
                        className="md:flex-4"
                        size="lg"
                        type="submit"
                    >
                        Calcular grupo
                    </Button>
                    <Button
                        className="md:flex-1"
                        size="lg"
                        variant="outline"
                        type="button"
                    >
                        Borrar
                    </Button>
                </Field>
            </FieldGroup>
        </FieldSet>
    );
}