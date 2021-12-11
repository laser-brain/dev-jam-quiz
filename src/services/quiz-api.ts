import { ICategoriesResponse, ITriviaCategory } from "../types/api-responses";

const apiUrl = 'https://opentdb.com'

export async function loadCategories(): Promise<ITriviaCategory[]> {
  const response = await fetch(`${apiUrl}/api_category.php`);
  const categories : ICategoriesResponse= await response.json()
  return categories.trivia_categories;
}
