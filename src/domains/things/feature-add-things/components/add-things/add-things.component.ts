import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-things',
  templateUrl: './add-things.component.html',
  styleUrls: ['./add-things.component.scss']
})
export class AddThingsComponent implements OnInit {

  view = {
    things: new Array<string>(),
  };

  constructor() { }

  ngOnInit(): void {
  }

  public onAddThings(): void {
    this.view.things.push('More Things!');
  }

}
