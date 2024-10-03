import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrl: './menu-user.component.css'
})
export class MenuUserComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
  }
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
