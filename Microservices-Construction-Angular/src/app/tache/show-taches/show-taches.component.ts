import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TacheService } from '../../service/tache/tache.service';
import { Tache } from '../../model/Construction.model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-show-taches',
  templateUrl: './show-taches.component.html',
  styleUrl: './show-taches.component.css'
})
export class ShowTachesComponent implements OnInit,AfterViewInit {

  taches: Tache[] = [];
  dataSource: MatTableDataSource<Tache> = new MatTableDataSource<Tache>([]);
  id! : any
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
  sortColumn: string = 'id';
  sortDirection: string = 'asc';
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private srv: TacheService , private router: ActivatedRoute){ }
  
  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe((sortState) => {
      this.onSortChange(sortState);
    });
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
  });}


  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.srv.showtache(this.id, this.currentPage - 1, this.itemsPerPage, this.sortColumn, this.sortDirection)
      .subscribe((res: any) => {
        this.taches = res.content; 
        this.dataSource.data = this.taches;
        console.log(res);
        this.totalItems = res.totalElements;
        this.totalPages = res.totalPages;
      });
  }
  


  
  displayedColumns: string[] = [ 'Description', 'Date Creation', 'Date Fin','Status','Delete','Update','Resources'];

  deleteTache(id:number){
    this.srv.deleteTache(id).subscribe(()=>{
      this.ngOnInit()
    })
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
}
