import { create } from 'apisauce'
const apiKey = '601235440a2f41f7b3843aef0753caf7';

const ApiController = create({
    baseURL: `https://api.spoonacular.com/recipes`,
})


export const GetAllRecipes = () => ApiController.get(`/random?apiKey=${apiKey}&number=10`);
