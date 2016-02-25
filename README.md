A minimal canvas library which can do almost nothing.

# Usage


## Define Sprite

```
function Sprite(x, y){
    this.x = x;
    this.y = y;
}

Sprite.prototype.step = function(s){
    //Move
}
Sprite.prototype.draw = function(s){
    //Draw
    s.ctx.beginPath();
    s.ctx.arc(this.x, this.y, 100, 0, Math.PI*2, false);
    s.ctx.stroke();
}
```

## Initialize & Start

```
var el = document.querySelector("#canvas");
new Syake({
    el : el,
    ready: function(s){
        var n = new Sprite(100, 100);
        s.nodes.push(n);
    }
});
```