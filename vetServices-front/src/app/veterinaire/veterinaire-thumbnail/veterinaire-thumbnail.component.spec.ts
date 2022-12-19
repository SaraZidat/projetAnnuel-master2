import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaireThumbnailComponent } from './veterinaire-thumbnail.component';

describe('VeterinaireThumbnailComponent', () => {
  let component: VeterinaireThumbnailComponent;
  let fixture: ComponentFixture<VeterinaireThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaireThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaireThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
