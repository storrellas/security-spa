import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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


  closeResult = '';

  constructor(private modalService: NgbModal) { }

  // [ Properties ] > [ Property A ] > [ Company A ] > [ Department A ] > Employees


  ngOnInit(): void {
    this.items = [
      {label:'Properties', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Property A', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Company A', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Department A', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'},
      {label:'Employees', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
    ];
    
    this.employeeList = [
      {'name': 'carl johnson', 'email': 'main engineer', 'phone': 'main engineer', 'lastEntry': '20/06/20 13:12'},
      {'name': 'carl johnson', 'email': 'main engineer', 'phone': 'main engineer', 'lastEntry': '20/06/20 13:12'},
      {'name': 'carl johnson', 'email': 'main engineer', 'phone': 'main engineer', 'lastEntry': '20/06/20 13:12'},
      {'name': 'carl johnson', 'email': 'main engineer', 'phone': 'main engineer', 'lastEntry': '20/06/20 13:12'},
    ]
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  showDialog() {
    this.display = true;
  }

}

