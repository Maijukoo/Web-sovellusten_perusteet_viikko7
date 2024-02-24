import { Shape } from "./Shape.js" 
 
export class Rectangle {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw(ctx) { 
        ctx.strokeStyle = this._color
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width, this.height) 
        ctx.lineWidth = this.lineWidth
        ctx.stroke()
    }
}