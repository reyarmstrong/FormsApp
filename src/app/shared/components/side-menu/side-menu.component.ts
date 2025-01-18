import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  standalone: false,

  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  reactiveMenu: MenuItem[] = [
    { title: 'Basics', route: './reactive/basic' },
    { title: 'Dynamics', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/switches' },
  ];

  authMenu: MenuItem[] = [
    { title: 'Registry', route: './auth' },
  ]

}
