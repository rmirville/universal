import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  view = {
    title: '',
  };
  clientSide: boolean = true;

  constructor(private meta: Meta, private title: Title, @Inject(PLATFORM_ID)private platformId: any) {}

  ngOnInit() {
    this.view.title = this.title.getTitle();
    this.clientSide = isPlatformBrowser(this.platformId);
    this.meta.addTags([
      { name: 'author', content: 'Raynald Mirville' },
      { name: 'title', content: this.view.title},
      { name: 'description', content: 'Manage your stuff and things for your everyday life.'},
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
