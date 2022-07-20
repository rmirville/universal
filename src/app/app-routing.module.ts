import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'stuff/add',
    loadChildren: () => import('../domains/stuff/feature-add-stuff/feature-add-stuff.module').then(m => m.FeatureAddStuffModule),
    title: 'Add Stuff | Stuff and Things Manager',
  },
  {
    path: 'things/add',
    loadChildren: () => import('../domains/things/feature-add-things/feature-add-things.module').then(m => m.FeatureAddThingsModule),
  },
  {
    path: '',
    redirectTo: 'stuff/add',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
