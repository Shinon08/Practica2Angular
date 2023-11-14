import {Component, EventEmitter, Input, Output} from "@angular/core"
import { Tarea } from "../mi-componente/models/tarea.model";
import { TareaCardItem } from "../mi-componente/models/tarea-card-item.model";

@Component({ 
    selector: 'app-tarea-card',
    templateUrl: './tarea-card.component.html',
})

export class TareaCardComponent{
    @Input()
    tarea! : Tarea;
    @Input()
    indice: number = -1;

    @Output("onStatusChange") emitter: EventEmitter<TareaCardItem>;

    constructor(){
        this.emitter = new EventEmitter();
    }

    cambiarStatus(status: string): void{
        this.tarea.status = status;

        this.emitter.emit({
            indice: this.indice,
            tarea: this.tarea
        });
    }
}