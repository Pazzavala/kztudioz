import { navLinks } from './data';

export type SectionName = (typeof navLinksType)[number]['name'];

type CollectionType = {
   _id: string;
   title: string;
   media: [string];
   // products: ProductType[];
   products: number;
};

type ProductType = {
   // clerkId: string;
   // wishlist: [string];
   // orders: [string];
   _id: string;
   title: string;
   description: string;
   media: [string];
   collections: [string];
   tags: [string];
   price: number;
   expense: number;
   // createdAt: Date;
   // updatedAt: Date;
   createdAt: string;
   updatedAt: string;
};

type UserType = {
   clerkId: string;
   wishlist: [string];
   // orders: [string];
   createdAt: string;
   updatedAt: string;
};

type OrderType = {
   _id: string;
   shippingAddress: Object;
   customerClerkId: string;
   products: [OrderItemType];
   shippingRate: string;
   totalAmount: number;
};

type OrderItemType = {
   _id: string;
   product: ProductType;
   // color: string;
   // size: string;
   quantity: number;
};
