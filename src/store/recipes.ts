import {IRecipe} from "../interfaces/recipe";

export const recipes: IRecipe[] = [
    {id: 'steam', name: 'пар', icon: '🌫', elements: ['water','fire']},
    {id: 'plant', name: 'растение', icon: '🌿', elements: ['water', 'earth']},
    {id: 'tree', name: 'дерево', icon: '🌳', elements: ['plant', 'plant']},
    {id: 'grass', name: 'трава', icon: '🌾', elements: ['plant', 'earth']},
    {id: 'lava', name: 'лава', icon: '🌋', elements: ['fire', 'earth']},
    {id: 'sky', name: 'небо', icon: '🌬', elements: ['air', 'air', 'air']},
    {id: 'river', name: 'река', icon: '🏞', elements: ['water', 'water', 'earth']},
]