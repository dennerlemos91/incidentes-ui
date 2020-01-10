import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './sidebar/logo/logo.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { TreeMenuComponent } from './sidebar/menu/tree-menu/tree-menu.component';
import { MenuItemComponent } from './sidebar/menu/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LogoComponent,
    MenuComponent,
    TreeMenuComponent,
    MenuItemComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SidebarComponent]
})
export class LayoutModule {}
