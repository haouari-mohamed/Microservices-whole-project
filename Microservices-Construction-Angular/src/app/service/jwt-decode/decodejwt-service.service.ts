import { Injectable } from '@angular/core';
import { PersonService } from '../person/person.service';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../model/Construction.model';

@Injectable({
  providedIn: 'root'
})


  export class DecodejwtServiceService {


    token: string | null = null;
  
    constructor(private srp:PersonService) {
  
      if (typeof localStorage !== 'undefined') {
        this.token = localStorage.getItem('jwt');
      }
  }
  private decodeToken(token: string): JwtPayload {
    console.log("hiii im decode ")
    return jwtDecode(token) as JwtPayload;
  }
  getUsernameFromToken(token: any) :any{
    console.log("hiii im getusername ")
    const decodedToken = this.decodeToken(token);
    return decodedToken.sub;
  }
  getRoleFromToken(token: any) :any{
    console.log("hiii im getrole")
    const decodedToken = this.decodeToken(token);
    return decodedToken.roles;
  }
  getIdByUsername(token:any){
    console.log("hiii im idbyuse")
    const username=this.getRoleFromToken(token);
    return this.srp.findIdByUsername(username);
  }
  
  
}
