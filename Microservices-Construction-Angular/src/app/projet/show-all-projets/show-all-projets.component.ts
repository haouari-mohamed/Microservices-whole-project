import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Projet } from '../../model/Construction.model';
import { ProjetService } from '../../service/projet/projet.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-show-all-projets',
  templateUrl: './show-all-projets.component.html',
  styleUrl: './show-all-projets.component.css'
})
export class ShowAllProjetsComponent implements OnInit, AfterViewInit {

  projets: Projet[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  sortColumn: string = 'id';
  sortDirection: string = 'asc';

  displayedColumns: string[] = ['id', 'name', 'description', 'dateCreation', 'dateFin', 'budget', 'delete', 'update', 'tache'];

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
    this.projetService.findAll(this.currentPage - 1, this.itemsPerPage, this.sortColumn, this.sortDirection)
      .subscribe((response: any) => {
        this.projets = response.content;
        this.totalItems = response.totalElements;
        this.totalPages = response.totalPages;
      });
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

  deleteProjet(id: number) {
    this.projetService.deleteProjet(id).subscribe(() => {
      this.ngOnInit(); 
    });
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
