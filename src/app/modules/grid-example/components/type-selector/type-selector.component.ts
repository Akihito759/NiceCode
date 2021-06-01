import { FilterService } from './../../services/filter.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.scss']
})
export class TypeSelectorComponent implements OnInit, OnDestroy {

  type = new FormControl('');
  availableTypes = ['audio','document','video','image'];
  subscriptions!: Subscription;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.subscriptions =
    this.type.valueChanges.subscribe(x => this.filterService.filterByType(x));

    this.subscriptions.add(
      this.filterService.clearFilters$.subscribe(
        () => this.type.setValue('')
      )
    );
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
