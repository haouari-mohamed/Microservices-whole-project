import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssociateDto, Tache } from '../../model/Construction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http:HttpClient) { }

  urlApi="http://localhost:8888";

  public showtache(id:number,page: number, size: number, sortColumn: string, sortDirection: string, description?: string):Observable<any>{
     
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', `${sortColumn},${sortDirection}`);
      if (description) {
        params = params.set('description', description);
      }
  
    return this.http.get<any>(`${this.urlApi}/TACHE-SERVICE/taches/${id}`, { params })
  }

  /* public showTacheWithFilter(id: number, description?: string): Observable<Tache[]> {
    let params = new HttpParams();
    if (description) {
      params = params.set('description', description);
    }
    return this.http.get<Tache[]>(`${this.urlApi}/TACHE-SERVICE/taches/${id}`, { params });
  } */
 
  public addTache(id:number,tache:Tache){
    return this.http.post(`${this.urlApi}/TACHE-SERVICE/admin/taches/${id}`,tache)
  }

  public deleteTache(id:number){
    return this.http.delete(`${this.urlApi}/TACHE-SERVICE/admin/taches/${id}`)
  }
  public updateTache(id:number,tache:Tache){
    return this.http.put(`${this.urlApi}/TACHE-SERVICE/admin/taches/${id}`,tache)
  }

  
  public findById(id:number):Observable<Tache>{
    return this.http.get<Tache>(`${this.urlApi}/TACHE-SERVICE/admin/taches/find/${id}`)
  }


}
