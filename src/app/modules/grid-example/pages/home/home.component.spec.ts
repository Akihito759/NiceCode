import { FilterService } from './../../services/filter.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let filterServiceSpy: jasmine.SpyObj<FilterService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {
          provide: FilterService,
          useValue: jasmine.createSpyObj(
            'FilterService',
            ['setClearFilters']
          )
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    filterServiceSpy = TestBed.inject(FilterService) as jasmine.SpyObj<FilterService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clearFilters() should call setClearFilters method from filterService', () => {
    component.clearFilters();
    expect(filterServiceSpy.setClearFilters).toHaveBeenCalledWith()
  });
});
