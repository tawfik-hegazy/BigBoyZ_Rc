export enum Category {
  CARS = 'RC Cars',
  BOATS = 'RC Boats',
  ACCESSORIES = 'Accessories',
  BATTERIES = 'Batteries',
  CHARGERS = 'Chargers',
  PARTS = 'Spare Parts'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  specs: Record<string, string>;
  inStock: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
