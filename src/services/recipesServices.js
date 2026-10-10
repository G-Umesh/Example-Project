
const API_URL = 'https://dummyjson.com/recipes';

export const getRecipes =  () => {
    try {
        const response =  fetch(API_URL);

        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }

        const data =  response.json();

        return data.recipes;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};
