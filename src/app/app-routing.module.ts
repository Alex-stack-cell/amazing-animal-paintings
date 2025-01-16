import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';

// Définir vos routes ici
const routes: Routes = [
  {path:"", redirectTo:"/products", pathMatch:"full"},
  {path: "products", component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Initialisation des routes
  exports: [RouterModule], // Export pour les autres modules
})
export class AppRoutingModule {}
