import { Rectangle } from "./Rectangle.js" 
 
export class Square extends Rectangle {
    constructor(x, y, width) {
        super(x, y, width, width)
    }
}