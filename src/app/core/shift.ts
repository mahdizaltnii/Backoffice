import { Intern } from "./intern";

export interface Shift{
    id: number;
    startTime: Date;
    endTime: Date;
    breakTime: Date;
    BreakDuration: number;
    interns:Set<Intern>;
    //users:Set<User>;

}