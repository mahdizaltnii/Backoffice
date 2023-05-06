import {User} from "../modal/user";

export class Evaluation {

    id!: number;
    question1!: string;
   question2!: string;
   question3!: string;
   question4!: string;
   question5!: string;
   question6!: string;
   question7!: string;
   question8c1!: string;
   question8c2!: string;
   question8c3!: string;
   question9!: number;
    comment!: string;
   
    createdAt!: Date;
    trainer!: User;
    learner!: User;
   
}


