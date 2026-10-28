export const categories = [
  "Bujías",
  "Aceites",
  "Filtros de Aire",
  "Filtros de Combustible",
  "Químicos y Aditivos",
  "Consumibles",
  "Kits de Afinación",
];

export const brands = ["NGK", "WD-40", "ECOM", "Lucas Oil"];

export type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  artwork: "plug" | "oil" | "filter" | "spray" | "kit";
};

export const products: Product[] = [
  { id: 1, name: "Bujía de cobre BKR5E", brand: "NGK", category: "Bujías", price: 89, oldPrice: 109, artwork: "plug" },
  { id: 2, name: "Aceite 5W-30 sintético 946 ml", brand: "Lucas Oil", category: "Aceites", price: 219, oldPrice: 249, artwork: "oil" },
  { id: 3, name: "Filtro de aire universal", brand: "ECOM", category: "Filtros de Aire", price: 149, artwork: "filter" },
  { id: 4, name: "Aflojatodo multiusos 311 g", brand: "WD-40", category: "Químicos y Aditivos", price: 139, oldPrice: 159, artwork: "spray" },
  { id: 5, name: "Filtro de combustible en línea", brand: "ECOM", category: "Filtros de Combustible", price: 79, artwork: "filter" },
  { id: 6, name: "Kit de afinación para Tsuru", brand: "NGK", category: "Kits de Afinación", price: 499, oldPrice: 559, artwork: "kit" },
  { id: 7, name: "Aditivo para motor 946 ml", brand: "Lucas Oil", category: "Químicos y Aditivos", price: 189, artwork: "oil" },
  { id: 8, name: "Limpiador de contactos 250 ml", brand: "WD-40", category: "Consumibles", price: 119, artwork: "spray" },
  { id: 9, name: "Bujía iridium para uso diario", brand: "NGK", category: "Bujías", price: 189, artwork: "plug" },
  { id: 10, name: "Filtro de aire para Chevy", brand: "ECOM", category: "Filtros de Aire", price: 129, artwork: "filter" },
  { id: 11, name: "Aceite 10W-40 alto kilometraje", brand: "Lucas Oil", category: "Aceites", price: 199, artwork: "oil" },
  { id: 12, name: "Kit de afinación para Pointer", brand: "ECOM", category: "Kits de Afinación", price: 459, artwork: "kit" },
];
