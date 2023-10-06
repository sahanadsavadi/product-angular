import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { DrawerComponent } from './layouts/header/drawer/drawer.component';
import { RouterModule } from '@angular/router';
import { NavItemsComponent } from './layouts/header/nav-items/nav-items.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DrawerComponent,
    NavItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
