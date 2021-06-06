import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './Components/category/crud/crud.component';
import { ProductHomeComponent } from './Components/product/product-home/product-home.component';
import { SubCrudComponent } from './Components/subCategory/sub-crud/sub-crud.component';

const routes: Routes = [
  { path: '', component: CrudComponent },
  { path: 'subCategoryPage', component: SubCrudComponent },
  { path: 'product/home', component: ProductHomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
