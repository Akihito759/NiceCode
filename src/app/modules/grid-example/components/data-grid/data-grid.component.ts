import { FilterService } from './../../services/filter.service';
import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MediaModel } from '../../models/media-model';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  public dataSource: Observable<MediaModel[]>;

  constructor(private dataservice: DataService, private filterService: FilterService) {
    filterService.setInitialData(dataservice.getData());
    this.dataSource = filterService.filtredData$;
   }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['title', 'type',];
}
