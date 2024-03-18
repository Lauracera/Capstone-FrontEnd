import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageConsultantComponent } from './image-consultant.component';

describe('ImageConsultantComponent', () => {
  let component: ImageConsultantComponent;
  let fixture: ComponentFixture<ImageConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageConsultantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
