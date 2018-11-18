import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLIstItemComponent } from './post-list-item.component';

describe('PostLIstItemComponent', () => {
  let component: PostLIstItemComponent;
  let fixture: ComponentFixture<PostLIstItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLIstItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLIstItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
