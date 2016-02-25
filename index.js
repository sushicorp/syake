function Syake(options) {
    var self = this;
    
    this.el = options.el;
    this.w = this.el.offsetWidth;
    this.h = this.el.offsetHeight;
    this.el.width = this.w;
    this.el.height = this.h;
    this.doClear = options.doClear ? options.doClear : true;
    this.onDraw = options.draw;
    this.onReady = options.ready;
    this.mx = 0;
    this.my = 0;
    this.ctx = this.el.getContext("2d");
    this.nodes = options.nodes ? options.nodes : [];
    this.el.addEventListener("mousemove", function(e){
        self.mx = e.offsetX;
        self.my = e.offsetY;
    });
    this.onReady(this);
    this.updateFrame();
}
Syake.prototype.draw = function () {
    if(this.doClear){
        this.clear();
    }
    var self = this;
    this.nodes.forEach(function(element) {
        element.step(self);
        element.draw(self);
    }, this);
    
    if(this.onDraw){
        this.onDraw(this);
    }
}
Syake.prototype.updateFrame = function () {
    var self = this;
    this.draw()
    window.requestAnimationFrame(function(){
        self.updateFrame();
    });
}
Syake.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.w, this.h);
}

// Normalize
Syake.prototype.nx = function(nx){
    var max = this.h > this.w ? this.h : this.w;
    return (nx + 1) * max;
}

Syake.prototype.ny = function(ny){
    var max = this.h > this.w ? this.h : this.w;
    return (ny + 1) * max;
}
module.exports = Syake;