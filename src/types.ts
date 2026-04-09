// types.ts
export interface MealResponse {
    meals: any[] | null;
}

export interface CocktailResponse {
    drinks: any[] | null;
}

export interface Recipe {
    id: number;
    title: { uk: string; en: string };
    // ... інші поля
}