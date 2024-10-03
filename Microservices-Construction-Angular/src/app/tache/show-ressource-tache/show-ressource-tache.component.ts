import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../service/ressource/ressource.service';
import { Ressource } from '../../model/Construction.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-ressource-tache',
  templateUrl: './show-ressource-tache.component.html',
  styleUrls: ['./show-ressource-tache.component.css']
})
export class ShowRessourceTacheComponent implements OnInit {

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
