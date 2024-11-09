import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicLegacyComponent } from './academic-legacy.component';

describe('AcademicLegacyComponent', () => {
  let component: AcademicLegacyComponent;
  let fixture: ComponentFixture<AcademicLegacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicLegacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicLegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
