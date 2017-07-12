import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongAdderComponent } from './song-adder.component';

describe('SongAdderComponent', () => {
  let component: SongAdderComponent;
  let fixture: ComponentFixture<SongAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
