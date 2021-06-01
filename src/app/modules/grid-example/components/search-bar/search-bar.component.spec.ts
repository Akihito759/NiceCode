import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';
import { MaterialModule } from 'src/app/modules/material.module';
import { FilterService } from '../../services/filter.service';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let filterServiceSpy: jasmine.SpyObj<FilterService>;
  let clearFiltersMock: Subject<void>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent],
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [
        {
          provide: FilterService,
          useValue: jasmine.createSpyObj(
            'FilterService',
            ['setClearFilters','clearFilters$','filterByTitle'],
          )
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    filterServiceSpy = TestBed.inject(FilterService) as jasmine.SpyObj<FilterService>;
    clearFiltersMock = new Subject();
    filterServiceSpy.clearFilters$ = clearFiltersMock.asObservable();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clear() should change inputValue to empty string', () => {
    component.inputValue = 'niceCodeTests';
    component.clear();

    expect(component.inputValue).toBe('');
  });

  it('When clearFilters$ emits value, clear() method should be called', () => {
    spyOn(component,'clear');
    clearFiltersMock.next();

    expect(component.clear).toHaveBeenCalled();
  });

  it('When clearFilters$ emits value, clear() method should change inputValue to empty string', () => {
    component.inputValue = 'niceCodeTests';
    clearFiltersMock.next();

    expect(component.inputValue).toBe('');
  });

  it('onChanges() should call filterByTitle() method from filterService with proper value', () => {
    component.onChanges('any');

    expect(filterServiceSpy.filterByTitle).toHaveBeenCalled();
    expect(filterServiceSpy.filterByTitle).toHaveBeenCalledWith('any');
  });
});
