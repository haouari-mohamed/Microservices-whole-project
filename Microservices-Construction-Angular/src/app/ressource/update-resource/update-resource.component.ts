import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RessourceService } from '../../service/ressource/ressource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ressource } from '../../model/Construction.model';

@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrl: './update-resource.component.css'
})
export class UpdateResourceComponent implements OnInit{

  ResourceId:any
  ResourceForm!:FormGroup

  constructor(private srv:RessourceService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.ResourceId=this.route.snapshot.paramMap.get("id")
    this.ResourceForm=this.fb.group({
      name:'',
      quantity: '',
      picture:'' ,
      infoFornisseur: '',

    })
    this.srv.findById(this.ResourceId).subscribe((res:any)=>{
      this.ResourceForm.patchValue({
        name:res.name,
      quantity:res.quantity,
      picture:res.picture ,
      infoFornisseur: res.infoFornisseur,

      })
      
    })
    
  }
  UpdateResource(){
    const resource:Ressource={
      id: 0,
      name: this.ResourceForm.value.name,
      quantity: this.ResourceForm.value.quantity,
      picture: this.ResourceForm.value.picture,
      infoFornisseur: this.ResourceForm.value.infoFornisseur,
      tacheId: ""
    }
    this.srv.updateRessource(this.ResourceId,resource).subscribe(()=>{
      this.ngOnInit()
      this.router.navigateByUrl('dashboard/resources')
    })
  }

}
