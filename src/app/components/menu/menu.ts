import { Component } from '@angular/core';

interface Plato {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    celiaco: boolean;
};

@Component({
    selector: 'app-menu',
    imports: [],
    templateUrl: './menu.html',
    styleUrl: './menu.css',
})
export class Menu { 

    constructor() { }

    public platos: Plato[] = [
        {
            id: 1,
            nombre: 'Tabla Mixta',
            descripcion: 'Tabla de embutidos y quesos',
            precio: 20,
            celiaco: false
        },
        {
            id: 2,
            nombre: 'Boquerones',
            descripcion: 'Boquerones en vinagre',
            precio: 12,
            celiaco: true
        }
    ]

}
