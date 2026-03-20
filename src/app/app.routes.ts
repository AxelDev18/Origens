import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './components/menu/menu';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'carta',
        component: Menu
    }
];
