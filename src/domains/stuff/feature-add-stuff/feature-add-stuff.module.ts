import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStuffPageComponent } from './pages/add-stuff/add-stuff.page.component';
import { AddStuffComponent } from './components/add-stuff/add-stuff.component';
import { FeatureAddStuffRoutingModule } from "./feature-add-stuff-routing.module";



@NgModule({
  declarations: [
    AddStuffPageComponent,
    AddStuffComponent
  ],
  imports: [
    CommonModule,
    FeatureAddStuffRoutingModule,
  ]
})
export class FeatureAddStuffModule { }
