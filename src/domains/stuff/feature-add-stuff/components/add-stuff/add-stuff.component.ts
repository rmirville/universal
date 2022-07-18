import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-stuff',
  templateUrl: './add-stuff.component.html',
  styleUrls: ['./add-stuff.component.scss']
})
export class AddStuffComponent implements OnInit {

  view = {
    stuff: new Array<string>(),
  };

  constructor() { }

  ngOnInit(): void {
  }

  public onAddStuff(): void {
    this.view.stuff.push('More Stuff!');
  }

}
