import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCovidComponent } from './painel-covid.component';

describe('PainelCovidComponent', () => {
  let component: PainelCovidComponent;
  let fixture: ComponentFixture<PainelCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
