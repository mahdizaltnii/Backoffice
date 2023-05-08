import { AnswerLearner } from "./answer-learner";
import { QuestQuizz } from "./quest-quizz";

export class Proposition {

    id !: number ;

    is_correct_answer! :number;// 0 incorrect, 1 correct , une seule proposition correcte, le quizz est sur 10
    
    suggest !:string;

    quest_quiz!: QuestQuizz;
    answer_learners!:  AnswerLearner[]
}
