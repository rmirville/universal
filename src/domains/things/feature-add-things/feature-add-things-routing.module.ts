import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AddThingsPageComponent } from "./pages/add-things/add-things.page.component";

const routes: Routes = [
  {
    path: '',
    title: 'Add Things | Stuff and Things Manager',
    component: AddThingsPageComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class FeatureAddThingsRoutingModule { }
