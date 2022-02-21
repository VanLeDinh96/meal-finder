import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListAllMealCategoriesService } from 'src/app/services/list-all-meal-categories.service';

@Component({
  selector: 'app-all-meal-categories',
  templateUrl: './all-meal-categories.component.html',
  styleUrls: ['./all-meal-categories.component.scss']
})
export class AllMealCategoriesComponent implements OnInit {
  dataSource: any;
  isLoading = true;
  displayedColumns: string[] = ['strCategory', 'strCategoryThumb'];
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private allMealCategoriesService: ListAllMealCategoriesService) { }

  ngOnInit(): void {
    this.listAllMealCategories();
  }

  listAllMealCategories() {
    this.allMealCategoriesService.getAllMealCategories().subscribe(data => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data.categories);
      this.dataSource.sort = this.sort;
    });
  }
}
