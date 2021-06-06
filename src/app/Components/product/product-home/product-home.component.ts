import { Component, OnInit } from '@angular/core';
import { CreateProductRequest } from 'src/app/Helpers/create-request';
import { SubCategory } from 'src/app/Helpers/Models';
import { ProductViewModel } from 'src/app/Helpers/ViewModels';
import { AppService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor(private appService:AppService) { }

  createRequest!:CreateProductRequest;

  list!:ProductViewModel[];

  subCategoriesList!: SubCategory[];

  ngOnInit(): void {
    this.list = [];
    this.subCategoriesList = [];
    this.loadList();
    this.loadSubCategories();
    this.createRequest = {
      SKUCode: "",
      price: 0,
      subCategoryId: 0,
      name: "",
      description: "",
    }
  }

  loadSubCategories() {
    this.appService.getSubCategories().subscribe((result) => {
      this.subCategoriesList = result;
    })
  }
  
  loadList() {
    this.appService.getProducts().subscribe((result) => {
      this.list = result;
    })
  }

  save(){
    this.appService.createProduct(this.createRequest).subscribe(() => this.loadList());
  }

  delete(id: number){
    this.appService.deleteProduct(id).subscribe(() => this.loadList());
  }
}
