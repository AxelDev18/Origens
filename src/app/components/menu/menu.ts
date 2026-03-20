import { Component, inject, OnInit } from '@angular/core';
import { MenuService, Plato } from '../../services/menu';

@Component({
    selector: 'app-menu',
    imports: [],
    templateUrl: './menu.html',
    styleUrl: './menu.css',
})
export class Menu { 

    constructor() { }

    private menuService = inject(MenuService);
    public platos: Plato[] = [];

    ngOnInit() {

        this.platos = this.menuService.obtenerPlatos();

    }

}
