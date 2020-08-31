import { Routes } from "@angular/router";

import { AboutComponent } from "./about/about-component";
import { BlogComponent } from "./blog/blog-component";
import { ContactComponent } from "./contact/contact-component";
import { PhotographyComponent } from "./photography/photography-component";

export const ComponentsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "photography",
        component: PhotographyComponent,
        data: {
          title: "Photography",
        },
      },

      {
        path: "about",
        component: AboutComponent,
        data: {
          title: "About",
        },
      },

      {
        path: "dropdown",
        data: {
          title: "Dropdown",
        },
      },
      {
        path: "blog",
        component: BlogComponent,
        data: {
          title: "Blog",
        },
      },

      {
        path: "contact",
        component: ContactComponent,
        data: {
          title: "Contact",
        },
      },
    ],
  },
];
