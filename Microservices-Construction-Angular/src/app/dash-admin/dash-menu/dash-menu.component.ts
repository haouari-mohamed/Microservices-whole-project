import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-menu',
  templateUrl: './dash-menu.component.html',
  styleUrls: ['./dash-menu.component.css']
})
export class DashMenuComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {}

  check = false;

  logout(check: boolean) {
    if (check) {
      localStorage.removeItem('jwt');
      this.router.navigateByUrl('');
    }
  }
  
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
