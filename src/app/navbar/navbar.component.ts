import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  isMenuCollapsed: boolean = true; // Haburger menu collapsed initially
  isDropdownCollapsed: boolean = true; // 'More' dropdown collapsed initially

  constructor() { }

  ngOnInit() {
  }

  public toggleNavbar(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  public toggleDropdown(){
    this.isDropdownCollapsed = !this.isDropdownCollapsed;
  }
}
