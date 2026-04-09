// types.ts
export interface LocalizedText {
    uk: string;
    en: string;
}

export interface LocalizedList {
    uk: string[];
    en: string[];
}

export interface Recipe {
    id: number;
    title: LocalizedText;
    category: string;    // ПЕРЕВІР, ЩО ЦЕЙ РЯДОК Є
    img: string;         // ПЕРЕВІР, ЩО ЦЕЙ РЯДОК Є
    desc: LocalizedText;
    ingredients: LocalizedList;
    steps: LocalizedList;
}