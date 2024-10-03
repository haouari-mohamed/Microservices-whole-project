import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../service/projet/projet.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Projet } from '../../model/Construction.model';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrl: './update-projet.component.css'
})
export class UpdateProjetComponent implements OnInit{
  ProjetId:any
  ProjetForm!:FormGroup

  constructor(private srv:ProjetService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.ProjetId=this.route.snapshot.paramMap.get("id")
    this.ProjetForm=this.fb.group({
      name:'',
      description:'',
      dateFin:'',
      budget:''

    })
    this.srv.findById(this.ProjetId).subscribe((res:any)=>{
      this.ProjetForm.patchValue({
        name:res.name,
      description:res.description,
      dateCreation:res.dateCreation,
      dateFin:res.dateFin,
      budget:res.budget

      })
      
    })

    
  }
  updateProjet(){
    const projet:Projet={
      id: 0,
      name: this.ProjetForm.value.name,
      description: this.ProjetForm.value.description,
      dateCreation: '',
      dateFin: this.ProjetForm.value.dateFin,
      budget: this.ProjetForm.value.budget
    }
    this.srv.updateProjet(this.ProjetId,projet).subscribe(()=>{
      this.router.navigateByUrl('projets')
    })
  }

}

  