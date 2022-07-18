import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStuffPageComponent } from './add-stuff.page.component';

describe('AddStuffPageComponent', () => {
  let component: AddStuffPageComponent;
  let fixture: ComponentFixture<AddStuffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStuffPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStuffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
