var Syake = require("../");

function rgba(r,g,b,a){
    return "rgba("+r+", "+g+", "+b+","+a+")"
}

var rad = 0;

function Sprite(x, y){
    this.x = x;
    this.y = y;
    this.rad = x / 10 + y;
    this.cx = x;
    this.cy = y;
}

Sprite.prototype.step = function(s){
    this.rad += 0.5;
    this.x = this.cx + Math.cos(this.rad / Math.PI / 2) * 10
    this.y = this.cy + Math.sin(this.rad / Math.PI / 2) * 10;
}
Sprite.prototype.draw = function(s){
    s.ctx.lineWidth = 1;
    s.ctx.fillStyle = rgba(100,100,100,0);
    s.ctx.strokeStyle = rgba(100,100,100,1);
    s.ctx.beginPath();
    var r = Math.abs(s.my - this.y) / 10;
    s.ctx.arc(this.x, this.y, r, 0, Math.PI*2, false);
    s.ctx.stroke();
}

var el = document.querySelector("#canvas");
new Syake({
    el : el,
    ready: function(s){
        for(var i = -1; i < 1; i+=0.1){
            for(var j = -1; j < 1; j+=0.1){
                var n = new Sprite(s.nx(i), s.ny(j));
                s.nodes.push(n);
            }
        }
    }
});

