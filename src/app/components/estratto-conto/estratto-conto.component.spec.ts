import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrattoContoComponent } from './estratto-conto.component';

describe('EstrattoContoComponent', () => {
  let component: EstrattoContoComponent;
  let fixture: ComponentFixture<EstrattoContoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstrattoContoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstrattoContoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
