export type Product = {
    id: string;
    object: string;
    active: boolean;
    attributes: any[]; // You may want to replace `any` with a specific type if you know the structure.
    created: number;
    default_price: string;
    description: string;
    features: any[]; // Same as above, replace `any` with a specific type.
    images: string[]; // Same as above, replace `any` with a specific type.
    livemode: boolean;
    metadata: Record<string, any>; // An object with string keys and any values.
    name: string;
    package_dimensions: null | any; // Replace `any` with a specific type.
    shippable: null | any; // Replace `any` with a specific type.
    statement_descriptor: null | any; // Replace `any` with a specific type.
    tax_code: null | any; // Replace `any` with a specific type.
    type: string;
    unit_label: null | any; // Replace `any` with a specific type.
    updated: number;
    url: null | string;
    product_price: ProductPrice;
}

export type ProductPrice = {
    id: string;
    object: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    custom_unit_amount: null | any; // Replace `any` with a specific type.
    livemode: boolean;
    lookup_key: null | any; // Replace `any` with a specific type.
    metadata: Record<string, any>; // An object with string keys and any values.
    nickname: null | any; // Replace `any` with a specific type.
    product: string;
    recurring: null | any; // Replace `any` with a specific type.
    tax_behavior: string;
    tiers_mode: null | any; // Replace `any` with a specific type.
    transform_quantity: null | any; // Replace `any` with a specific type.
    type: string;
    unit_amount: number;
    unit_amount_decimal: string;
}