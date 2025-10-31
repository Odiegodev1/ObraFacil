import { Button } from "@/components/ui/button"
import {
  Dialog,

  DialogContent,
  DialogDescription,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { FormOrcamento } from "./formorcamento"

export function NewOrc(){
    return(
        <>
        <Dialog >
            <DialogTrigger asChild >
                <Button className="mt-8">Novo</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Novo Orçamento</DialogTitle>
                    <DialogDescription>Orçamento rapido e facil</DialogDescription>
                </DialogHeader>
                <div className="px-2 space-y-2">
                    
                     <FormOrcamento />
                </div>

            </DialogContent>
        </Dialog>
          
        </>
    )
}