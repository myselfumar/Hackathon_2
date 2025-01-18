export interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    colors: string[];
    image: string;
    description?: string;
  }
  
  export interface ProductListProps {
    products: Product[];
  }
  
  