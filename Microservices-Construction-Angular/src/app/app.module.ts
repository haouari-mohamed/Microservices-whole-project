import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RegistreComponent } from './auth/registre/registre.component';
import { AddProjetComponent } from './projet/add-projet/add-projet.component';
import { UpdateProjetComponent } from './projet/update-projet/update-projet.component';
import { ShowAllProjetsComponent } from './projet/show-all-projets/show-all-projets.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IntercepteurService } from './service/intercepteur/intercepteur.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowAllResourceComponent } from './ressource/show-all-resource/show-all-resource.component';
import { AddResourceComponent } from './ressource/add-resource/add-resource.component';
import { UpdateResourceComponent } from './ressource/update-resource/update-resource.component';
import { AssociateComponent } from './ressource/associate/associate.component';
import { AddTacheComponent } from './tache/add-tache/add-tache.component';
import { UpadateTacheComponent } from './tache/upadate-tache/upadate-tache.component';
import { ShowTachesComponent } from './tache/show-taches/show-taches.component';
import { AssignRessourceComponent } from './tache/assign-ressource/assign-ressource.component';
import { ShowRessourceTacheComponent } from './tache/show-ressource-tache/show-ressource-tache.component';
import { DashboardComponent } from './dash-admin/dashboard/dashboard.component';
import { DashMenuComponent } from './dash-admin/dash-menu/dash-menu.component';
import { ProjetComponent } from './dash-admin/projet/projet.component';
import { TacheComponent } from './dash-admin/tache/tache.component';
import { ResourceComponent } from './dash-admin/resource/resource.component';
import { AllressourceComponent } from './dash-admin/allressource/allressource.component';
import { ProjetUserComponent } from './dash-user/projet-user/projet-user.component';
import { ResourceUserComponent } from './dash-user/resource-user/resource-user.component';
import { TacheUserComponent } from './dash-user/tache-user/tache-user.component';
import { MenuUserComponent } from './dash-user/menu-user/menu-user.component';
import { DashboardUserComponent } from './dash-user/dashboard-user/dashboard-user.component';
import { ResourceTacheUserComponent } from './dash-user/resource-tache-user/resource-tache-user.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    AddProjetComponent,
    UpdateProjetComponent,
    ShowAllProjetsComponent,
    ShowAllResourceComponent,
    AddResourceComponent,
    UpdateResourceComponent,
    AssociateComponent,
    AddTacheComponent,
    UpadateTacheComponent,
    ShowTachesComponent,
    AssignRessourceComponent,
    ShowRessourceTacheComponent,
    DashboardComponent,
    DashMenuComponent,
    ProjetComponent,
    TacheComponent,
    ResourceComponent,
    AllressourceComponent,
    ProjetUserComponent,
    ResourceUserComponent,
    TacheUserComponent,
    MenuUserComponent,
    DashboardUserComponent,
    ResourceTacheUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatPaginator,
    MatSortModule,
    FormsModule ,
    MatFormFieldModule,

  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
