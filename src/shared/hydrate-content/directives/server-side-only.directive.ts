import { isPlatformServer } from '@angular/common';
import { Directive, Inject, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appServerSideOnly]'
})
export class ServerSideOnlyDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId: any) {}
      
  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
        this.viewContainer.clear();
    }
  }
}
