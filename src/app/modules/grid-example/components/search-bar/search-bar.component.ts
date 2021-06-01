import { FilterService } from './../../services/filter.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  inputValue = '';
  subscriptions: Subscription;

  constructor(private filterService: FilterService) {
    this.subscriptions = filterService.clearFilters$.subscribe(
      () => this.clear()
    );
  }

  ngOnInit(): void {
  }

  onChanges(newValue: any){
    this.filterService.filterByTitle(newValue);
  }

  clear(){
    this.inputValue = '';
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

}
