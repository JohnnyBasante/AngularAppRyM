import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'list',
        loadComponent: () => import('./components/list/list.component').then(m => m.ListaComponent)
    }
    
];

