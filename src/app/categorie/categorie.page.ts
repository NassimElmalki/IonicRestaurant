import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  modal : String = "none" ;


  constructor() { }

  ngOnInit() {
    this.modal;
  }

 /*  onClick(){
    if(this.modal=="none"){
      document.getElementById('1').style.display='block';
    }
    else {
      document.getElementById('1').style.display='none';
    }
   
  } */

}
