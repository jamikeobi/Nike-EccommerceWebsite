export class Products{
    id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: string;
    color: string[];
    price: number;
    discountPrice?: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
}