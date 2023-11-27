import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaisSearchComponent } from './ramais-search.component';

describe('RamaisSearchComponent', () => {
  let component: RamaisSearchComponent;
  let fixture: ComponentFixture<RamaisSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamaisSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamaisSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
