import { isPlatformServer } from '@angular/common';
import { Directive, Inject, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appClientSideOnly]'
})
export class ClientSideOnlyDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId: any) {}
      
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.clear();
    }
    else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
