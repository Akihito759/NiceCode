import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import {first, map, switchMap, tap} from 'rxjs/operators';
import { MediaModel } from '../models/media-model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private initialData: BehaviorSubject<MediaModel[]> = new BehaviorSubject([] as MediaModel[]);
  private titleFilter: BehaviorSubject<string> = new BehaviorSubject('');
  private typeFilter: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);
  private clearFilters: Subject<void> = new Subject();
  public  clearFilters$ = this.clearFilters.asObservable();

  constructor() { }

  public filterByTitle(title: string){
    this.titleFilter.next(title);
  }

  public filterByType(types: string[]){
    this.typeFilter.next(types);
  }

  public setInitialData(data: Observable<MediaModel[]>){
    data.pipe(
      first(),
      ).subscribe(x => this.initialData.next(x));
  }

  public setClearFilters(){
    this.titleFilter.next('');
    this.typeFilter.next([]);

    this.clearFilters.next();
  }

  public filtredData$ = combineLatest([this.initialData,this.titleFilter,this.typeFilter]).pipe(
      map(([data,titleFilter,typeFilter]) => {
        return data
        .filter(x => titleFilter === '' || x.title.toLowerCase().startsWith(titleFilter.toLowerCase()))
        .filter(x => typeFilter.length === 0 || typeFilter.includes(x.type))
      }),
    )

}
