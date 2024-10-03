import { Component, OnInit } from '@angular/core';
import { Ressource } from '../../model/Construction.model';
import { RessourceService } from '../../service/ressource/ressource.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-tache-user',
  templateUrl: './resource-tache-user.component.html',
  styleUrl: './resource-tache-user.component.css'
})
export class ResourceTacheUserComponent implements OnInit{
  Ressourcelist!: Ressource[];
  idT!: any;
  displayedColumns: string[] = ['picture', 'name', 'quantity', 'infoFornisseur'];

  constructor(private srv: RessourceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idT = this.route.snapshot.paramMap.get('id');
    this.srv.findRessourceTache(this.idT).subscribe(res => {
      this.Ressourcelist = res;
    });
  }

}
