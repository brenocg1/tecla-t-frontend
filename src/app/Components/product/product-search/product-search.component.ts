import { Component, OnInit } from '@angular/core';
import { SearchProduct } from 'src/app/Helpers/create-request';
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

  ngOnInit(): void {
    this.list = [];
    this.loadList();
    this.searchRequest = {
      price: 0,
      name: "",
      description: "",
      SKUCode: "",
      subCategoryId: 0,
      categoryId: 0
    }
  }

  search(){

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
