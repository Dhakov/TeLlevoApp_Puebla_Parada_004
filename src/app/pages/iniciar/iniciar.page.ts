import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario={
    Usuario:'',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }


}
