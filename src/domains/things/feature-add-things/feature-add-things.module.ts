import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThingsPageComponent } from './pages/add-things/add-things.page.component';
import { AddThingsComponent } from './components/add-things/add-things.component';
import { FeatureAddThingsRoutingModule } from "./feature-add-things-routing.module";
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    AddThingsPageComponent,
    AddThingsComponent
  ],
  imports: [
    CommonModule,
    FeatureAddThingsRoutingModule,
    SharedModule,
  ]
})
export class FeatureAddThingsModule { }
