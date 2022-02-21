import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListAllAreasService } from 'src/app/services/list-all-areas.service';

@Component({
  selector: 'app-all-areas',
  templateUrl: './all-areas.component.html',
  styleUrls: ['./all-areas.component.scss']
})
export class AllAreasComponent implements OnInit {
  dataSource: any;
  isLoading = true;
  displayedColumns: string[] = ['strArea'];
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private allAreasService: ListAllAreasService) { }

  ngOnInit(): void {
    this.listAllAreas();
  }

  listAllAreas() {
    this.allAreasService.getAllAreas().subscribe(data => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data.meals);
      this.dataSource.sort = this.sort;
    });
  }
}
