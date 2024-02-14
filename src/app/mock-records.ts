import { Record } from "./Record";

export const RECORDS: Record[] = [
    {
        id: 1,
        name: 'Bamburi Cement',
        unit: 'kgs',
        price: 700,
        category: 'kgs',
        description: 'Consectetur adipiscing elit',
        vat: false,
        discount: true,
    },
    {
        id: 2,
        name: 'Dejavu Nails',
        unit: 'Pack',
        price: 50,
        category: 'Nails',
        description: 'Lorem ipsum dolor sit amet',
        vat: true,
        discount: false,
    },
    {
        id: 3,
        name: 'Bamburi Cement',
        unit: 'Piece',
        price: 500,
        category: 'Sheets',
        description: 'Sed do eiusmod tempor incididunt',
        vat: false,
        discount: false,
    },
];