import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../../model/Construction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http:HttpClient) { }

  urlApi="http://localhost:8888";


  public addProjet(projet:Projet){
    return this.http.post(`${this.urlApi}/PROJET-SERVICE/admin/projets`,projet)
  }

  
  findAll(page: number, size: number, sortColumn: string, sortDirection: string, 
    name?: string, minBudget?: number, maxBudget?: number, startDate?: string, endDate?: string): Observable<any> {
    
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', `${sortColumn},${sortDirection}`);
  
    if (name) {
      params = params.set('name', name);
    }
    if (minBudget !== null && minBudget !== undefined) {
      params = params.set('minBudget', minBudget.toString());
    }
    if (maxBudget !== null && maxBudget !== undefined) {
      params = params.set('maxBudget', maxBudget.toString());
    }
    if (startDate) {
      params = params.set('startDate', startDate);
    }
    if (endDate) {
      params = params.set('endDate', endDate);
    }
  
    return this.http.get<any>(`${this.urlApi}/PROJET-SERVICE/projets`, { params });
  }
  

  public deleteProjet(id:number ){
    return this.http.delete(`${this.urlApi}/PROJET-SERVICE/admin/projets/${id}`,)
  }
  public updateProjet(id:number ,projet:Projet){
    return this.http.put(`${this.urlApi}/PROJET-SERVICE/admin/projets/${id}`,projet)
  }
  public findById(id:number){
    return this.http.get(`${this.urlApi}/PROJET-SERVICE/admin/projets/${id}`)
  }
}
