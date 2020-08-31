import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [
			{ path: '', redirectTo: '/home', pathMatch: 'full' },
			{
				path: 'home',
				loadChildren: () => import('./home/home-module').then(m => m.DashboardModule)
			},
			{
				path: 'component',
				loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: '/home'
	}
];
