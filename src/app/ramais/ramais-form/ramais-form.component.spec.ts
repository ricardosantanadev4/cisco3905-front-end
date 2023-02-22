import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaisFormComponent } from './ramais-form.component';

describe('RamaisFormComponent', () => {
  let component: RamaisFormComponent;
  let fixture: ComponentFixture<RamaisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamaisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamaisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
