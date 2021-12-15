import {
  ICategoriesResponse,
  ITriviaCategory,
  IQuizQuestionResponse,
  IQuizQuestion,
} from '../types/api-responses';

const apiUrl = 'https://opentdb.com';

export async function getCategories(): Promise<ITriviaCategory[]> {
  const response = await fetch(`${apiUrl}/api_category.php`);
  const categories: ICategoriesResponse = await response.json();

  return categories.trivia_categories;
}

export async function getQuestions(
  categoryId: number,
  count: number
): Promise<IQuizQuestion[]> {
  const response = await fetch(
    `${apiUrl}/api.php?amount=${count}&category=${categoryId}`
  );
  const questions: IQuizQuestionResponse = await response.json();

  return questions.results;
}
