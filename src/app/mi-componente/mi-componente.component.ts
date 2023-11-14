import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item.model';
import { Tarea } from './models/tarea.model';
import { TareaCardItem } from './models/tarea-card-item.model';
import { ActiveMenuItem } from './models/active-menu-item.model';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  //public menuItems: {item:string, active:boolean}[] = [];
  //opciones para el menu
  activeMenuItem: MenuItem = { item: '', active: false };
  activeMenuItemIndex: number = 1;
  //public tareas: {titulo: string, descripcion:string, status:string}[] = [];
  //vista de tareas
  tareas: Tarea[] = [];
  //agregar tarea
  newTarea: Tarea = {
    titulo: '',
    descripcion: '',
    status: 'Pendiente',
  };

  constructor() {
    //this.menuItems.push( {item: 'Nueva tarea', active: false} );
    //this.menuItems.push( {item: 'Mis tareas', active: true} );
  }

  ngOnInit(): void {
    const tareasJson = localStorage.getItem("tareas");
    if (tareasJson != null) {
      this.tareas = JSON.parse(tareasJson);
    }
  }

  public catchMenuItem(item: ActiveMenuItem): void {
    this.activeMenuItem = item.MenuItem;
    this.activeMenuItemIndex = item.activeIndex;
  }

  public agregarTarea(titulo: string, descripcion: string): void {
    this.newTarea.titulo = titulo;
    this.newTarea.descripcion = descripcion;

    this.tareas.push(this.newTarea);
    this.newTarea = {
      titulo: titulo,
      descripcion: descripcion,
      status: "Pendiente"
    }
  }

  public cambiarStatus(index:number, status: string): void {
    this.tareas[index].status = status;
    this.almacenarDatos();
  }

  private almacenarDatos(): void {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  catchOnStatusChange(info: TareaCardItem) {
    let{indice, tarea} = info;
    this.tareas[indice] = tarea;
  }

  catchOnAddTarea(tarea:Tarea) {
    this.tareas.push(tarea);
    //navegar a la lista
    this.activeMenuItemIndex = 1;

    //almacenar datos
    this.almacenarDatos();
  }

  getMenuClass(item: MenuItem): any {
  }


}
