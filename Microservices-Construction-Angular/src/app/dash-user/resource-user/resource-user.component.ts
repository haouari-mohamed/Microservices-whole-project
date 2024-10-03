import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../service/ressource/ressource.service';
import { Ressource } from '../../model/Construction.model';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-resource-user',
  templateUrl: './resource-user.component.html',
  styleUrl: './resource-user.component.css'
})
export class ResourceUserComponent implements OnInit{
  constructor(private srv:RessourceService){}

  ResourceList!:Ressource[]
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  name: string = ''; 
  sortColumn: string = 'quantity';
  sortDirection: string = 'asc';
  dataSource = new MatTableDataSource<Ressource>();

  ngOnInit(): void {
    this.srv.showAll(this.currentPage - 1, this.itemsPerPage, this.sortColumn, this.sortDirection, this.name).subscribe((res:any)=>{
      this.ResourceList=res.content
      this.dataSource.data=this.ResourceList;
      this.totalItems = res.totalElements;
      this.totalPages = res.totalPages;
    })
    
  }
  displayedColumns: string[] = ['Name', 'Quantity', 'Picture', 'Info Fornisseur','Tache id'];
  onSortChange(sort: Sort) {
    const direction = sort.direction ? sort.direction : 'asc';
    this.loadTachesWithSort(sort.active, direction);
}

 loadTachesWithSort(sortColumn: string, sortDirection: string) {
  this.srv.showAll(this.currentPage - 1, this.itemsPerPage, sortColumn, sortDirection, this.name).subscribe(res => {
    this.dataSource.data = res.content;
    this.totalItems = res.totalElements;
    this.totalPages = res.totalPages;
  });
}
  getPagesArray(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }
  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.ngOnInit();
    }
  }
  onFilterChange(){
   /*  this.ngOnInit(); */

  }


}
