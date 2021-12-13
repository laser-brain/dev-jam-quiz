import { IQuizQuestion } from "./api-responses";

export interface IQuizQuestionViewModel extends IQuizQuestion {
  activeQuestion: boolean
  answeredCorrectly: boolean,
}