import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThingsComponent } from './add-things.component';

describe('AddThingsComponent', () => {
  let component: AddThingsComponent;
  let fixture: ComponentFixture<AddThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
