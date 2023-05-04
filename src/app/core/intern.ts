import { InternshipRequest } from "./internshipRequest";
import { Shift } from "./shift";

export interface Intern {
    cin:number;
    firstName:String;
    lastName:String;
    email:String;
    shift:Shift;
    internshipRequests: Set<InternshipRequest>;
}