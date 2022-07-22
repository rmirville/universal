import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HydrateContentModule } from './hydrate-content/hydrate-content.module';
import { ClientSideOnlyDirective } from './hydrate-content/directives/client-side-only.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HydrateContentModule,
  ],
  exports: [
    ClientSideOnlyDirective,
  ]
})
export class SharedModule { }
