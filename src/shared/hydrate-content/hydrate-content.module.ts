import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSideOnlyDirective } from './directives/client-side-only.directive';
import { ServerSideOnlyDirective } from './directives/server-side-only.directive';



@NgModule({
  declarations: [
    ClientSideOnlyDirective,
    ServerSideOnlyDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ClientSideOnlyDirective,
    ServerSideOnlyDirective,
  ],
})
export class HydrateContentModule { }
