// @/models/types.ts

import { RetailChain } from '@/models/enums';

// use enum as keys for this object
export type RetailPrices = {
  [K in RetailChain]:{
    price:number | 'none';
    lastUpdated:Date;
  };
};
export type BottleСapacity = 0.5 | 0.7 | 1.0;

// we will use it in cocktails and recipes
export type IngredientsAndQuantities<E extends string> = {
  [K in E]?:string;
};

export type CountryData = {
  country_name:string;
  country_id?:number;
  prefix_ean?:string;
};
export type CategoriesData = {
  drink_category:string;
  drink_id?:number;
};
