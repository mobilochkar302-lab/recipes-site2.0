import { MealResponse, CocktailResponse } from './types';

export class ApiClient {
    // Пошук страв
    static async searchMeal(query: string): Promise<MealResponse> {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            if (!response.ok) throw new Error('Помилка завантаження страв');
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Пошук коктейлів
    static async searchCocktail(query: string): Promise<CocktailResponse> {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
            if (!response.ok) throw new Error('Помилка завантаження коктейлів');
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Випадковий коктейль
    static async getRandomCocktail(): Promise<CocktailResponse> {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        return await response.json();
    }
}