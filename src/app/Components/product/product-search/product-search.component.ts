import { Component, OnInit } from '@angular/core';
import { SearchProduct } from 'src/app/Helpers/create-request';
import { Category, SubCategory } from 'src/app/Helpers/Models';
import { ProductViewModel } from 'src/app/Helpers/ViewModels';
import { AppService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(private appService:AppService) { }

  searchRequest!:SearchProduct;

  list!:ProductViewModel[];
  subCategoriesList!: SubCategory[];
  categories!:Category[];

  ngOnInit(): void {
    this.list = [];
    this.loadList();
    this.loadCategories();
    this.loadSubCategories();
    this.categories = [];
    this.subCategoriesList = [];
    this.searchRequest = {
      price: null,
      name: null,
      description: null,
      SKUCode: null,
      subCategoryId: null,
      categoryId: null
    }
  }

  validateFields(){
    if(this.searchRequest.SKUCode == null &&
    this.searchRequest.description == null &&
    this.searchRequest.name == null &&
    this.searchRequest.categoryId == null &&
    this.searchRequest.subCategoryId == null &&
    this.searchRequest.price == null){
      return false;
    }
    return true;
  }

  clearFields(){
    this.searchRequest = {
      price: null,
      name: null,
      description: null,
      SKUCode: null,
      subCategoryId: null,
      categoryId: null
    }
  }

  search(){
    console.log(this.searchRequest);
    if(this.validateFields()){
      this.appService.searchProduct(this.searchRequest).subscribe((result) => this.list = result );
    }else{
      alert("You must at least one filter to perform a search!");
    }
  }

  loadCategories() {
    this.appService.getCategories().subscribe((result) => {
      this.categories = result;
    })
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

  delete(id: number){
    this.appService.deleteProduct(id).subscribe(() => this.loadList());
  }
}
