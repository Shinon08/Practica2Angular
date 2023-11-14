import {Component, Output, EventEmitter} from "@angular/core"
import { Tarea } from "../mi-componente/models/tarea.model"

@Component({
    selector: 'app-tarea-formulario',
    templateUrl: './tarea-formulario.component.html',
})

export class TareaFormularioComponent{

    @Output("onAddTarea") emitter: EventEmitter<Tarea>;

    constructor(){
        this.emitter = new EventEmitter();
    }

    emitirTarea(titulo: string, descripcion: string): void{
        let tarea : Tarea = {
            titulo, //si el nombre de la variable del emitir tarea ya tiene el nombre necesario para usarse no es necesario hacer el titulo:titulo,
            descripcion,
            status: "Pendiente"
        };
        this.emitter.emit(tarea);
    }
}