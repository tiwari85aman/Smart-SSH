import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortForwardFormComponent } from './port-forward-form.component';
import { PortForwardComponent } from '../port-forward/port-forward.component';

describe('LocalForwardFormComponent', () => {
  let component: PortForwardComponent;
  let fixture: ComponentFixture<PortForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
