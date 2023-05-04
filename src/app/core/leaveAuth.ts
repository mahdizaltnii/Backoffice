import { Reason } from "./reason";
import { Status } from "./status";

export interface LeaveAuth{
    id: number;
    startDate: Date;
    endDate: Date;
    verification: String;
    reason: Reason;
    status: Status;

    //user:User;
}