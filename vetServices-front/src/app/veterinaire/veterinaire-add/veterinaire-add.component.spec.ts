import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaireAddComponent } from './veterinaire-add.component';

describe('VeterinaireAddComponent', () => {
  let component: VeterinaireAddComponent;
  let fixture: ComponentFixture<VeterinaireAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaireAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
