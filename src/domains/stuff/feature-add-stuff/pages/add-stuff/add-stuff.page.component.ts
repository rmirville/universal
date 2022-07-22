import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-stuff-page',
  templateUrl: './add-stuff.page.component.html',
  styleUrls: ['./add-stuff.page.component.scss']
})
export class AddStuffPageComponent implements OnInit {
  view = {
    title: '',
  };
  clientSide: boolean = true;

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.view.title = this.title.getTitle();
    this.meta.addTags([
      { name: 'author', content: 'Raynald Mirville' },
      { name: 'title', content: this.view.title},
      { name: 'description', content: 'Manage your stuff for your convenience.'},
      { name: 'robots', content: 'index, follow' },
    ]);
  }

}
