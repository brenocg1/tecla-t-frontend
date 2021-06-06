import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs/internal/Observable";
import { Category, SubCategory } from "../Helpers/Models";
import { environment } from "src/environments/environment";
import { CreateCategoryRequest, CreateProductRequest, CreateSubCategoryRequest, SearchProduct } from "../Helpers/create-request";
import { ProductViewModel } from "../Helpers/ViewModels";

@Injectable({
	providedIn: 'root'
})

export class AppService{
	constructor(private http:HttpClient){ }

	getCategories():Observable<Category[]>{
		return this.http.get<Category[]>(environment.APIUrl + "Category/GetAll");
	}

	
	createCategory(request: CreateCategoryRequest): Observable<any>{
		const url = `${environment.APIUrl}Category/create/${request.name}`
		return this.http.post<any>(url, request);
	}
	
	deleteCategory(id:number): Observable<any>{
		const url = `${environment.APIUrl}Category/${id}`
		return this.http.delete<any>(url);
	}
	
	getSubCategories():Observable<SubCategory[]>{
		return this.http.get<SubCategory[]>(environment.APIUrl + "SubCategory/GetAll");
	}

	createSubCategory(request: CreateSubCategoryRequest): Observable<any>{
		const url = `${environment.APIUrl}SubCategory/create/${request.name}/${request.categoryName}`
		return this.http.post<any>(url, request);
	}

	deleteSubCategory(id:number): Observable<any>{
		const url = `${environment.APIUrl}SubCategory/${id}`
		return this.http.delete<any>(url);
	}

	getProducts():Observable<ProductViewModel[]>{
		return this.http.get<ProductViewModel[]>(environment.APIUrl + "Product/GetAll");
	}

	createProduct(request: CreateProductRequest): Observable<any>{
		const url = `${environment.APIUrl}Product/create/`
		return this.http.post<any>(url, request);
	}

	deleteProduct(id:number): Observable<any>{
		const url = `${environment.APIUrl}Product/${id}`
		return this.http.delete<any>(url);
	}

	searchProduct(request: SearchProduct): Observable<ProductViewModel[]>{
		const url = `${environment.APIUrl}Product/search/product`
		return this.http.put<ProductViewModel[]>(url, request);
	}
}