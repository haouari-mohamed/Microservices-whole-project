import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssociateDto, Ressource } from '../../model/Construction.model';
import { TacheService } from '../../service/tache/tache.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { RessourceService } from '../../service/ressource/ressource.service';

@Component({
  selector: 'app-assign-ressource',
  templateUrl: './assign-ressource.component.html',
  styleUrl: './assign-ressource.component.css'
})
export class AssignRessourceComponent implements OnInit{
  idT:any
  RessourceForm!:FormGroup
  listRessource!:Ressource[]
  associatedto!:AssociateDto

  constructor(private srv:RessourceService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router,private srvr:RessourceService){}
  ngOnInit(): void {
    this.idT=this.route.snapshot.paramMap.get('id')
    this.associatedto = { idTache: this.idT };

    this.RessourceForm=this.fb.group({
      idRessource:''
    })
    this.srvr.allRessources().subscribe((res: Ressource[]) => {
      this.listRessource = res;
    });
  }

  Assign(){
    const idr = this.RessourceForm.value.idRessource;
    this.srv.associate(idr,this.associatedto).subscribe(()=>{
      this.ngOnInit()

    })
  }

}
