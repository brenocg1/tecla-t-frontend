import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCrudComponent } from './sub-crud.component';

describe('SubCrudComponent', () => {
  let component: SubCrudComponent;
  let fixture: ComponentFixture<SubCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
