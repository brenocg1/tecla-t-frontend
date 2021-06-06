export interface CreateCategoryRequest {
	name: string;
}

export interface CreateSubCategoryRequest {
	name: string;
	categoryName: string;
}

export interface CreateProductRequest {
	name: string;
	price: number;
	SKUCode: string;
	description: string;
	subCategoryId: number;
}

export interface SearchProduct {
	name: string;
	price: number;
	SKUCode: string;
	description: string;
	categoryId: number;
	subCategoryId: number;
}