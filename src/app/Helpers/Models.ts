export interface Category {
	id: number;
	name: string;
}

export interface SubCategory {
	id: number;
	name: string;
	categoryName: string;
}

export interface Product {
	id: number;
	name: string;
	price:number;
	SKU:string;
	description:string;
}