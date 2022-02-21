import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListAllIngredientsService } from 'src/app/services/list-all-ingredients.service';

@Component({
  selector: 'app-all-ingredients',
  templateUrl: './all-ingredients.component.html',
  styleUrls: ['./all-ingredients.component.scss']
})
export class AllIngredientsComponent implements OnInit {
  dataSource: any;
  isLoading = true;
  displayedColumns: string[] = ['strIngredient'];
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private allIngredientsService: ListAllIngredientsService) { }

  ngOnInit(): void {
    this.listAllIngredients();
  }

  listAllIngredients() {
    this.allIngredientsService.getAllIngredients().subscribe(data => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data.meals);
      this.dataSource.sort = this.sort;
    });
  }
}
