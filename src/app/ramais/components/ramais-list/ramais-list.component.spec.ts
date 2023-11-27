import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaisListComponent } from './ramais-list.component';

describe('RamaisListComponent', () => {
  let component: RamaisListComponent;
  let fixture: ComponentFixture<RamaisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamaisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamaisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
