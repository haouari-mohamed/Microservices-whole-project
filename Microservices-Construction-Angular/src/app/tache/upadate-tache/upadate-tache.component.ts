import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../service/tache/tache.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EStatus, Tache } from '../../model/Construction.model';

@Component({
  selector: 'app-upadate-tache',
  templateUrl: './upadate-tache.component.html',
  styleUrl: './upadate-tache.component.css'
})
export class UpadateTacheComponent implements OnInit{
  id:any
  TacheForm!:FormGroup
  statusOptions = Object.values(EStatus);
  idProjet:any


  constructor(private srv:TacheService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('idT')
   this.TacheForm=this.fb.group({
    description: '',
    dateFin: '',
    status:''
   })
   this.srv.findById(this.id).subscribe((res:any)=>{
    this.idProjet = res.projetId;
    this.TacheForm.patchValue({
    description:res.description,
    dateFin:res.dateFin ,
    infoFornisseur: res.infoFornisseur,
    status:res.status

    })
    
  })
    
  }

  UpdateTache(){
    const tache : Tache = {
      id: this.id,
      description: this.TacheForm.value.description,
      dateCreation: '',
      dateFin: this.TacheForm.value.dateFin,
      status:this.TacheForm.value.status,
      projetId:  this.idProjet
    }
    this.srv.updateTache(this.id,tache).subscribe(()=>{
      this.ngOnInit()
      this.router.navigateByUrl(`/dashboard/tache/${this.idProjet}`)
    })
  }

}
