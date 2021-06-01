
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { FormsModule } from '@angular/forms';
import { TypeSelectorComponent } from './components/type-selector/type-selector.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    DataGridComponent,
    TypeSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ]
})
export class GridExampleModule { }
