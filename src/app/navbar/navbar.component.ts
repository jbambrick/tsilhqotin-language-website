import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { INavbarItem } from '../interfaces/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public isMenuCollapsed: boolean = true; // Haburger menu collapsed initially
  public isDropdownCollapsed: boolean = true; // 'More' dropdown collapsed initially
  public navbarItems: INavbarItem[] = [
    // {name:"radio", routerLink:"/radio", display:"104.5"}, //insert this one manually for unique style
    {name:"dialect", routerLink:"/dialect", display:"Dialect"},
    {name:"songs", routerLink:"/songs", display:"Songs"},
    {name:"videos", routerLink:"/videos", display:"Videos"},
    {name:"apps", routerLink:"/apps", display:"Apps"},
    {name:"links", routerLink:"/links", display:"Links"}
  ];
  public moreNavbarItems: INavbarItem[] = [
    {name:"teachers", routerLink:"/teachers", display:"Teachers"},
    {name:"funders", routerLink:"/funders", display:"Funders"},
    {name:"contact", routerLink:"/contact", display:"Contact"}
  ];

  constructor() { }

  ngOnInit() {
  }

  public toggleNavbar(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  public toggleDropdown(){
    this.isDropdownCollapsed = !this.isDropdownCollapsed;
  }

  public navbarItemClick(){
    console.log(`Navbar item clicked`);
    this.isMenuCollapsed = true;
  }

  public dropdownItemClick(){
    console.log(`Dropdown item clicked`);
    this.navbarItemClick();
    this.isDropdownCollapsed = true;
  }
}
