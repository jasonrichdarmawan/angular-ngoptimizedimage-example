import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPagePage } from './test-page.page';

describe('TestPagePage', () => {
  let component: TestPagePage;
  let fixture: ComponentFixture<TestPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestPagePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
