import { Quizz } from "./quizz";
import { Proposition } from './proposition';

export class QuestQuizz {

    id!: number;

    question!: string;
    quizz!: Quizz;


    propositions!:Proposition[];
}
