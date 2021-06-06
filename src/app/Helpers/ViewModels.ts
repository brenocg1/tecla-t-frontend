export interface SubCategoryViewModel {
	name: string;
	categoryName: string;
}

export interface CategoryViewModel {
	name: string;
}

export interface ProductViewModel {
	id: number;
	name: string;
	price: number;
	description: string;
	subCategory: string;
	skuCode: string;	
}