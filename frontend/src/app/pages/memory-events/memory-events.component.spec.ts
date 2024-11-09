import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryEventsComponent } from './memory-events.component';

describe('MemoryEventsComponent', () => {
  let component: MemoryEventsComponent;
  let fixture: ComponentFixture<MemoryEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
