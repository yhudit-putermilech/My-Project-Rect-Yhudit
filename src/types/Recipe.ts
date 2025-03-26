export interface Recipe {
    id: number;
    title: string;
    description: string;
    authorId: string; 
    ingredients: string[];
    instructions: string;
    products: any[]; 
}

        