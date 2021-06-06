import { Component, OnInit } from '@angular/core';
import { CreateSubCategoryRequest } from 'src/app/Helpers/create-request';
import { Category, SubCategory } from 'src/app/Helpers/Models';
import { AppService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sub-crud',
  templateUrl: './sub-crud.component.html',
  styleUrls: ['./sub-crud.component.css']
})
export class SubCrudComponent implements OnInit {

  list!:SubCategory[];

  createRequest!:CreateSubCategoryRequest;
  categories!:Category[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.list = [];
    this.categories = [];
    this.loadCategories();
    this.loadList();
    this.createRequest = {
      name: "",
      categoryName: ""
    }
  }

  loadCategories() {
    this.appService.getCategories().subscribe((result) => {
      this.categories = result;
    })
  }

  loadList() {
    this.appService.getSubCategories().subscribe((result) => {
      this.list = result;
    })
  }

  save(){
    if(this.createRequest.name == null || this.createRequest.categoryName == null){
      alert("All fields are required");
      return;
    }

    this.appService.createSubCategory(this.createRequest).subscribe(() => this.loadList());
  }

  delete(id: number){
    this.appService.deleteSubCategory(id).subscribe(() => this.loadList());
  }
}
