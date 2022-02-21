import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListAllMealsByFirstLetterService } from 'src/app/services/list-all-meals-by-first-letter.service';

@Component({
  selector: 'app-meal-searching-by-first-letter',
  templateUrl: './meal-searching-by-first-letter.component.html',
  styleUrls: ['./meal-searching-by-first-letter.component.scss']
})
export class MealSearchingByFirstLetterComponent implements OnInit {
  @ViewChild('f') submittedForm: NgForm | undefined;
  valueSearch = '';
  dataSource: any;
  displayedColumns: string[] = ['strMeal'];
  isLoading = true;
  displayList = false;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private listAllMealsByFirstLetterService: ListAllMealsByFirstLetterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.valueSearch = this.submittedForm?.value.search;
    this.valueSearch = this.valueSearch.replace(/\s+/g, '_').toLowerCase();
    this.listAllMealsByFirstLetterService.getAllMealByFirstLetter(this.valueSearch).subscribe(data => {
      this.isLoading = false;
      this.displayList = true;
      this.dataSource = new MatTableDataSource(data.meals);
      this.dataSource.sort = this.sort;
    });
  }
}
