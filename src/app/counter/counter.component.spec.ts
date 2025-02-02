import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase number when call onIncrease', () => {
    component.number = 2
    component.onIncrease()
    expect(component.number).toEqual(3)
  })

  it('should increase number when click increase button', () => {
    component.number = 2

    fixture.debugElement.query(By.css('button')).triggerEventHandler('click')
    fixture.detectChanges()

    const text = fixture.debugElement.query(By.css('span')).nativeElement.textContent
    expect(text).toEqual('number: 3')
  })

  it('should decrease number when click decrease button', () => {
    component.number = 2

    fixture.debugElement.queryAll(By.css('button'))[1].triggerEventHandler('click')
    fixture.detectChanges()

    const text = fixture.debugElement.query(By.css('span')).nativeElement.textContent
    expect(text).toEqual('number: 1')
  })

  it('should reset number to 0 when call onReset', () => {
    component.number = 2
    component.onReset()
    expect(component.number).toEqual(0)
  })

});
