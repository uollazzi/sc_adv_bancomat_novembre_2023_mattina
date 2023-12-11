import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelievoComponent } from './prelievo.component';

describe('PrelievoComponent', () => {
  let component: PrelievoComponent;
  let fixture: ComponentFixture<PrelievoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrelievoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrelievoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
