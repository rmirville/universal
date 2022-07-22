import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AddStuffPageComponent } from "./pages/add-stuff/add-stuff.page.component";

const routes: Routes = [
  {
    path: '',
    title: 'Add Stuff | Stuff and Things Manager',
    component: AddStuffPageComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class FeatureAddStuffRoutingModule { }
