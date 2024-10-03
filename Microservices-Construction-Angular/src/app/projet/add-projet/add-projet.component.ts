import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjetService } from '../../service/projet/projet.service';
import { Projet } from '../../model/Construction.model';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrl: './add-projet.component.css'
})
export class AddProjetComponent implements OnInit {
  ProjetForm!:FormGroup
  constructor(private srv:ProjetService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.ProjetForm=this.fb.group({
      name:'',
      description:'',
      dateFin:'',
      budget:''
    })
    
  }

  submitProjet(){
    const projet:Projet={
      id: 0,
      name: this.ProjetForm.value.name,
      description: this.ProjetForm.value.description,
      dateCreation: '',
      dateFin: this.ProjetForm.value.dateFin,
      budget: this.ProjetForm.value.budget
    }
    this.srv.addProjet(projet).subscribe(()=>{
      this.ngOnInit()
    })

  }

  

}
