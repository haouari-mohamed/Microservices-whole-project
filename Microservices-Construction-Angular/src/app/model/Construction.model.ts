// person
export interface Person {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;
  }
  
  // projet
  export interface Projet {
    id: number;
    name: string;
    description: string;
    dateCreation: string;
    dateFin: string;
    budget: number;
  }
  
  // tache
  export enum EStatus {
    A_FAIRE = 'A_FAIRE',
    EN_COURS = 'EN_COURS',
    TERMINER = 'TERMINER'
  }

  
  export interface Tache {
    id: number;
    description: string;
    dateCreation: string;
    dateFin: string;
    status: EStatus;
    projetId: number;
  }
  export interface LoginRequestDto{
    username:string
    password:string
}
export enum Erole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
 
}
  
  // ressource
  export interface Ressource {
    id: number;
    name: string;
    quantity: number;
    picture: string;
    infoFornisseur: string;
    tacheId: string;
  }

  export interface JwtPayload {
    sub: string; 
    iat: number; 
    exp: number; 
    roles: string; 
  }

  export interface AssociateDto {
     idTache:number

}