import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../service/tache/tache.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Erole, EStatus, Tache } from '../../model/Construction.model';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrl: './add-tache.component.css'
})
export class AddTacheComponent implements OnInit {

  tacheForm! : FormGroup

  constructor (private srv : TacheService, private fb:FormBuilder){}

  ngOnInit(): void {
    this.tacheForm = this.fb.group({
    
    description: '',
    dateCreation: '',
    dateFin: '',
    projetId: ''

    })   
  }
  submitTache(){
    const tache : Tache = {
      id: 0,
      description: this.tacheForm.value.description,
      dateCreation: '',
      dateFin: this.tacheForm.value.dateFin,
      status: EStatus.A_FAIRE,
      projetId: this.tacheForm.value.projetId,
    }
    this.srv.addTache(this.tacheForm.value.projetId,tache).subscribe(()=>{
      this.ngOnInit()
    })
  }




}
