import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaisModule } from '../pais/pais.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PaisModule
  ],
  exports:  [SidebarComponent
  ]
})
export class SharedModule { }
