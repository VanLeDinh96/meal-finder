import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListAllMealsByNameService } from 'src/app/services/list-all-meals-by-name.service';

@Component({
  selector: 'app-meal-searching-by-name',
  templateUrl: './meal-searching-by-name.component.html',
  styleUrls: ['./meal-searching-by-name.component.scss']
})
export class MealSearchingByNameComponent implements OnInit {
  @ViewChild('f') submittedForm: NgForm | undefined;
  valueSearch = '';
  isLoading = true;
  displayList = false;
  @ViewChild(MatSort) sort: MatSort | undefined;
  dataSource: any;
  displayedColumns: string[] = ['strMeal'];

  constructor(private listAllMealsByNameService: ListAllMealsByNameService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.valueSearch = this.submittedForm?.value.search;
    this.valueSearch = this.valueSearch.replace(/\s+/g, '_').toLowerCase();
    this.listAllMealsByNameService.getAllMealByName(this.valueSearch).subscribe(data => {
      this.isLoading = false;
      this.displayList = true;
      this.dataSource = new MatTableDataSource(data.meals);
      this.dataSource.sort = this.sort;
    });
  }
}
