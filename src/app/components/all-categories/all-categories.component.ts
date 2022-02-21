import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListAllCategoriesService } from 'src/app/services/list-all-categories.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
  dataSource: any;
  isLoading = true;
  displayedColumns: string[] = ['strCategory'];
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private allCategoriesService: ListAllCategoriesService) { }

  ngOnInit(): void {
    this.listAllCategories();
  }

  listAllCategories() {
    this.allCategoriesService.getAllCategories().subscribe(data => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data.meals);
      this.dataSource.sort = this.sort;
    });
  }
}
