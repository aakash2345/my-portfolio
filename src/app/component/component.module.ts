import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ComponentsRoutes } from "./component.routing";
import { AboutComponent } from "./about/about-component";
import { BlogComponent } from "./blog/blog-component";
import { ContactComponent } from "./contact/contact-component";
import { PhotographyComponent } from "./photography/photography-component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    PhotographyComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PhotographyComponent,
  ],
})
export class ComponentsModule {}
