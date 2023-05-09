import { Departement } from "./departement";
import { Intern } from "./intern";
import { Status } from "./status";

export interface InternshipRequest {
    id:number;
    lettreMotivation:String;
    rtesume:String;
    createdat:Date;
    DesiredStartDate:Date;
    DesiredEndDate:Date;
    status:Status;
    departement:Departement;

    intern:Intern;
}