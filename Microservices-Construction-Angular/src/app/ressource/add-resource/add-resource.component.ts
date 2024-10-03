import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../service/ressource/ressource.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ressource } from '../../model/Construction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrl: './add-resource.component.css'
})
export class AddResourceComponent implements OnInit{
  ResourceForm!:FormGroup

  constructor(private srv:RessourceService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.ResourceForm=this.fb.group({
      name:'',
      quantity: '',
      picture:'' ,
      infoFornisseur: '',
      
    })
    
  }

  SubmitResource(){
    const resource:Ressource={
      id: 0,
      name: this.ResourceForm.value.name,
      quantity: this.ResourceForm.value.quantity,
      picture: this.ResourceForm.value.picture,
      infoFornisseur: this.ResourceForm.value.infoFornisseur,
      tacheId: ""
    }
    this.srv.addRessource(resource).subscribe(()=>{
      this.ngOnInit()
      this.router.navigateByUrl('dashboard/resources')
    })
  }

}
