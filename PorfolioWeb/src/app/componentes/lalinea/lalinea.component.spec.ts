import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LalineaComponent } from './lalinea.component';

describe('LalineaComponent', () => {
  let component: LalineaComponent;
  let fixture: ComponentFixture<LalineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LalineaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LalineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
