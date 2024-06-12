import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsServiceComponent } from './missions-service.component';

describe('MissionsServiceComponent', () => {
  let component: MissionsServiceComponent;
  let fixture: ComponentFixture<MissionsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionsServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
