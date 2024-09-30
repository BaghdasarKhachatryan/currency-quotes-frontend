import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [CommonModule, RouterModule, SharedModule, LayoutRoutingModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
