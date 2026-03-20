import { Injectable } from '@angular/core';

export interface Plato {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    celiaco: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class MenuService {

    private listaPlatos: Plato[] = [
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
    ];

    public obtenerPlatos(): Plato[] {

        return this.listaPlatos;

    };

}
