import { Image } from "./image";

export class Training {
    id!: number;
    name!: number;
    start_date!: Date;
    end_date!: Date;
    period!: number;
    cost!: number;
    img!: Image;
    imageDataUrl!: string
}
