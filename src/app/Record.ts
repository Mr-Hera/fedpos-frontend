export interface Record {
    id?: number;
    name: string;
    category: string;
    unit: string;
    price: number;
    description: string;
    vat?: boolean;
    discount?: boolean;
}