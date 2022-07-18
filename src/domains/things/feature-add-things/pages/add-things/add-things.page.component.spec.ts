import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThingsPageComponent } from './add-things.page.component';

describe('AddThingsPageComponent', () => {
  let component: AddThingsPageComponent;
  let fixture: ComponentFixture<AddThingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddThingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
