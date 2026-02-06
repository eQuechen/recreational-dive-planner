import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { ReactNode } from "react"

export function DisabledDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-not-allowed ">
          <div className="pointer-events-none opacity-60">
            {children}
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="text-center">
        <DialogTitle>No disponible</DialogTitle>
        <p>Esta característica está en fase de desarrollo.</p>
      </DialogContent>
    </Dialog>
  )
}
