import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestDto, Person } from '../../model/Construction.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  urlApi="http://localhost:8888";

  constructor(private http:HttpClient) { }

  public addUser(person:Person){
    return this.http.post(`${this.urlApi}/USER-SERVICE/api/auth/signup`,person)
  }

  public Login(login:LoginRequestDto){
    return this.http.post(`${this.urlApi}/USER-SERVICE/api/auth/login`,login)
  }
  public findIdByUsername(username:string){
    return this.http.get(`${this.urlApi}/USER-SERVICE/find/${username}`)
  }
}
