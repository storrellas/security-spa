import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faIndustry, faLock, faPencilRuler, faSearch, faTrashAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faCoffee = faCoffee;
  faIndustry = faIndustry;
  faLock = faLock;
  faPencilRuler = faPencilRuler;
  faSearch = faSearch;
  faTrashAlt = faTrashAlt;
  faShieldAlt = faShieldAlt;
  display : Boolean = false;

  items: MenuItem[];

  employeeList: any [];


  constructor() { }

  ngOnInit(): void {

    this.employeeList = [
      {'name': 'carl johnson', 'role': 'main engineer', 'position': 'main engineer', 'lock': '123'},
      {'name': 'carl johnson', 'role': 'main engineer', 'position': 'main engineer', 'lock': '123'},
      {'name': 'carl johnson', 'role': 'main engineer', 'position': 'main engineer', 'lock': '123'},
      {'name': 'carl johnson', 'role': 'main engineer', 'position': 'main engineer', 'lock': '123'},
    ]
  }

}

