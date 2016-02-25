(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"../":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5ub2RlYnJldy9ub2RlL3Y1LjEuMC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRlbW8vbWFpbi5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgU3lha2UgPSByZXF1aXJlKFwiLi4vXCIpO1xuXG5mdW5jdGlvbiByZ2JhKHIsZyxiLGEpe1xuICAgIHJldHVybiBcInJnYmEoXCIrcitcIiwgXCIrZytcIiwgXCIrYitcIixcIithK1wiKVwiXG59XG5cbnZhciByYWQgPSAwO1xuXG5mdW5jdGlvbiBTcHJpdGUoeCwgeSl7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMucmFkID0geCAvIDEwICsgeTtcbiAgICB0aGlzLmN4ID0geDtcbiAgICB0aGlzLmN5ID0geTtcbn1cblxuU3ByaXRlLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24ocyl7XG4gICAgdGhpcy5yYWQgKz0gMC41O1xuICAgIHRoaXMueCA9IHRoaXMuY3ggKyBNYXRoLmNvcyh0aGlzLnJhZCAvIE1hdGguUEkgLyAyKSAqIDEwXG4gICAgdGhpcy55ID0gdGhpcy5jeSArIE1hdGguc2luKHRoaXMucmFkIC8gTWF0aC5QSSAvIDIpICogMTA7XG59XG5TcHJpdGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihzKXtcbiAgICBzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgIHMuY3R4LmZpbGxTdHlsZSA9IHJnYmEoMTAwLDEwMCwxMDAsMCk7XG4gICAgcy5jdHguc3Ryb2tlU3R5bGUgPSByZ2JhKDEwMCwxMDAsMTAwLDEpO1xuICAgIHMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHZhciByID0gTWF0aC5hYnMocy5teSAtIHRoaXMueSkgLyAxMDtcbiAgICBzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHIsIDAsIE1hdGguUEkqMiwgZmFsc2UpO1xuICAgIHMuY3R4LnN0cm9rZSgpO1xufVxuXG52YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKTtcbm5ldyBTeWFrZSh7XG4gICAgZWwgOiBlbCxcbiAgICByZWFkeTogZnVuY3Rpb24ocyl7XG4gICAgICAgIGZvcih2YXIgaSA9IC0xOyBpIDwgMTsgaSs9MC4xKXtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IC0xOyBqIDwgMTsgais9MC4xKXtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBTcHJpdGUocy5ueChpKSwgcy5ueShqKSk7XG4gICAgICAgICAgICAgICAgcy5ub2Rlcy5wdXNoKG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbiIsImZ1bmN0aW9uIFN5YWtlKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG4gICAgdGhpcy53ID0gdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmggPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICB0aGlzLmVsLndpZHRoID0gdGhpcy53O1xuICAgIHRoaXMuZWwuaGVpZ2h0ID0gdGhpcy5oO1xuICAgIHRoaXMuZG9DbGVhciA9IG9wdGlvbnMuZG9DbGVhciA/IG9wdGlvbnMuZG9DbGVhciA6IHRydWU7XG4gICAgdGhpcy5vbkRyYXcgPSBvcHRpb25zLmRyYXc7XG4gICAgdGhpcy5vblJlYWR5ID0gb3B0aW9ucy5yZWFkeTtcbiAgICB0aGlzLm14ID0gMDtcbiAgICB0aGlzLm15ID0gMDtcbiAgICB0aGlzLmN0eCA9IHRoaXMuZWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMubm9kZXMgPSBvcHRpb25zLm5vZGVzID8gb3B0aW9ucy5ub2RlcyA6IFtdO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgc2VsZi5teCA9IGUub2Zmc2V0WDtcbiAgICAgICAgc2VsZi5teSA9IGUub2Zmc2V0WTtcbiAgICB9KTtcbiAgICB0aGlzLm9uUmVhZHkodGhpcyk7XG4gICAgdGhpcy51cGRhdGVGcmFtZSgpO1xufVxuU3lha2UucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYodGhpcy5kb0NsZWFyKXtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdGVwKHNlbGYpO1xuICAgICAgICBlbGVtZW50LmRyYXcoc2VsZik7XG4gICAgfSwgdGhpcyk7XG4gICAgXG4gICAgaWYodGhpcy5vbkRyYXcpe1xuICAgICAgICB0aGlzLm9uRHJhdyh0aGlzKTtcbiAgICB9XG59XG5TeWFrZS5wcm90b3R5cGUudXBkYXRlRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZHJhdygpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe1xuICAgICAgICBzZWxmLnVwZGF0ZUZyYW1lKCk7XG4gICAgfSk7XG59XG5TeWFrZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oKTtcbn1cblxuLy8gTm9ybWFsaXplXG5TeWFrZS5wcm90b3R5cGUubnggPSBmdW5jdGlvbihueCl7XG4gICAgdmFyIG1heCA9IHRoaXMuaCA+IHRoaXMudyA/IHRoaXMuaCA6IHRoaXMudztcbiAgICByZXR1cm4gKG54ICsgMSkgKiBtYXg7XG59XG5cblN5YWtlLnByb3RvdHlwZS5ueSA9IGZ1bmN0aW9uKG55KXtcbiAgICB2YXIgbWF4ID0gdGhpcy5oID4gdGhpcy53ID8gdGhpcy5oIDogdGhpcy53O1xuICAgIHJldHVybiAobnkgKyAxKSAqIG1heDtcbn1cbm1vZHVsZS5leHBvcnRzID0gU3lha2U7Il19
