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
	name: string | null;
	price: number | null;
	SKUCode: string | null;
	description: string | null;
	categoryId: number | null;
	subCategoryId: number | null;
}