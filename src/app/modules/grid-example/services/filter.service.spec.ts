import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { eMediaType, MediaModel } from '../models/media-model';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;
  let mockCollection: MediaModel[] = [
    {
      title: 'Heaven',
      type: eMediaType.audio
    },
    {
      title: 'The Two Towers',
      type: eMediaType.document
    }
  ]


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
    service.setInitialData(of(mockCollection));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('filterByTitle() should returns correct filtred collection', () => {
    const searchingTitle = 'Heaven'
    service.filterByTitle(searchingTitle);

    service.filtredData$.subscribe(x => {
      expect(x.length).toBe(1);
      expect(x[0].title).toBe(searchingTitle);
    });
  });

  it('filterByTitle() should returns empty collection if no element has exactly name', () => {
    const searchingTitle = 'NoFound'
    service.filterByTitle(searchingTitle);

    service.filtredData$.subscribe(x => {
      expect(x.length).toBe(0);
    });
  });

  it('filterByTitle() should returns all collection for empty string', () => {
    const searchingTitle = ''
    service.filterByTitle(searchingTitle);

    service.filtredData$.subscribe(x => {
      expect(x.length).toBe(2);
    });
  });

  it('filterByType() should returns all collection for empty collection', () => {
    service.filterByType([]);

    service.filtredData$.subscribe(x => {
      expect(x.length).toBe(2);
    });
  });

  it('filterByType() should returns filtred collection', () => {
    service.filterByType(['audio']);

    service.filtredData$.subscribe(x => {
      expect(x.length).toBe(1);
      expect(x[0].title).toBe('Heaven')
    });
  });

  it('setClearFilters() should clear filters and return all collection', () => {
    service.filterByType(['audio']);
    service.filterByTitle('abc');
    service.setClearFilters();

    service.filtredData$.subscribe(x => {
      expect(x.length).toBe(2);
    });
  });

});
