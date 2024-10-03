import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjetService } from '../../service/projet/projet.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
@Component({
  selector: 'app-projet-user',
  templateUrl: './projet-user.component.html',
  styleUrls: ['./projet-user.component.css']
})
export class ProjetUserComponent implements OnInit {
  projets: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  sortColumn: string = 'id';
  sortDirection: string = 'asc';

  // Filter 
  filterName: string = '';
  filterMinBudget: number | null = null;
  filterMaxBudget: number | null = null;
  filterStartDate: string = '';
  filterEndDate: string = '';

  displayedColumns: string[] = ['id', 'name', 'description', 'dateCreation', 'dateFin', 'budget', 'tache'];

  constructor(private projetService: ProjetService) {}
  
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.loadProjets();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe((sortState) => {
      this.onSortChange(sortState);
    });
  }

  loadProjets() {
    this.projetService.findAll(
      this.currentPage - 1,
      this.itemsPerPage,
      this.sortColumn,
      this.sortDirection,
      this.filterName || undefined,  
      this.filterMinBudget ?? undefined, 
      this.filterMaxBudget ?? undefined,  
      this.filterStartDate || undefined,  
      this.filterEndDate || undefined     
    ).subscribe((response: any) => {
      this.projets = response.content;
      this.totalItems = response.totalElements;
      this.totalPages = response.totalPages;
    });
    console.log(this.projets)
    console.log("not working")
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadProjets();
    }
  }

  onSortChange(sortState: Sort) {
    this.sortColumn = sortState.active;
    this.sortDirection = sortState.direction || 'asc';
    this.loadProjets();
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onFilterChange() {
    this.loadProjets(); 
  }
}
