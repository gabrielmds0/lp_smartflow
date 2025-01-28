import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocaciaComponent } from './advocacia.component';

describe('AdvocaciaComponent', () => {
  let component: AdvocaciaComponent;
  let fixture: ComponentFixture<AdvocaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvocaciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvocaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
