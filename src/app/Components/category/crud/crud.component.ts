import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/Helpers/Models';
import { CreateCategoryRequest } from 'src/app/Helpers/create-request';
import { AppService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  
  list!:Category[];

  createRequest!:CreateCategoryRequest;
  
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.list = [];
    this.loadList();
    this.createRequest = {
      name: "",
    }
  }

  loadList() {
    this.appService.getCategories().subscribe((result) => {
      this.list = result;
    })
  }

  save(){
    this.appService.createCategory(this.createRequest).subscribe(() => this.loadList());
  }

  delete(id: number){
    this.appService.deleteCategory(id).subscribe(() => this.loadList());
  }
}
