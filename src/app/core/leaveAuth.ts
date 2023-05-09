import { Reason } from "./reason";
import { Status } from "./status";
import { User } from "./user";

export interface LeaveAuth{
    id: number;
    startDate: Date;
    endDate: Date;
    verification: String;
    reason: Reason;
    status: Status;
    userr : User; 

    //user:User;
}