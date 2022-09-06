import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'log-in-outline',
      name: 'Iniciar Sesión',
      redirecTo: '/iniciar',
    },
    {
      icon: 'log-out-outline',
      name: 'Registrarse',
      redirecTo:'/registro',
    },
    {
      icon: 'people-outline',
      name: 'Nuestra Misión',
      redirecTo:'/nosotros',
    },
  ];

}
