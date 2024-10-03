import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Tache } from '../../model/Construction.model';
import { ActivatedRoute } from '@angular/router';
import { TacheService } from '../../service/tache/tache.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-tache-user',
  templateUrl: './tache-user.component.html',
  styleUrls: ['./tache-user.component.css'] 
})

export class TacheUserComponent implements OnInit,AfterViewInit{
  listTache! : Tache[]
  id! : any
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  description: string = ''; 
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private srv: TacheService , private router: ActivatedRoute){ }

  dataSource = new MatTableDataSource<Tache>();
  
 
  displayedColumns: string[] = ['Description', 'Date Creation', 'Date Fin', 'Status', 'Resources'];


  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
    this.srv.showtache(this.id, this.currentPage - 1, this.itemsPerPage, 'dateFin', 'asc',this.description).subscribe((res :any ) => {
      this.listTache = res.content;
      this.dataSource.data=this.listTache;
      this.totalItems = res.totalElements;
      this.totalPages = res.totalPages;

    } )
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  
  onSortChange(sort: Sort) {
    const direction = sort.direction ? sort.direction : 'asc';
    this.loadTachesWithSort(sort.active, direction);
}

 loadTachesWithSort(sortColumn: string, sortDirection: string) {
  this.srv.showtache(this.id, this.currentPage - 1, this.itemsPerPage, sortColumn, sortDirection).subscribe(res => {
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


/*   loadTaches(): void {
    this.srv.showTacheWithFilter(this.id, this.description).subscribe((res: Tache[]) => {
      this.listTache = res;
      this.dataSource.data = this.listTache;
    });
  } */

  onFilterChange(): void {
    this.ngOnInit(); 
  }
}
