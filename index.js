//*************************Style 1 : constructor *********************/
function Point(x,y){
  this.x = x;
  this.y = y;
  this.swap = swap;
}

Point.prototype.swap = function(){
	[this.x,this.y] = [this.y,this.x];
};

var p = new Point(2,5);
p.addOne = function(){
	this.x++;
  	this.y++;
};
p.z = 1;
p.swap();
p.addOne();
console.log(p.x,p.y,p.z); 

/************************Style 2 : Prototype ************************/
function Point(x,y) {
 	this.x = x;
  this.y = y;
}

Point.prototype.swap = function(){
		[this.x,this.y] = [this.y,this.x];
};

function SpecialPoint(x,y,z){
	Point.call(this,x,y);
  	this.z = z;
}

SpecialPoint.prototype = Object.create(Point.prototype);
SpecialPoint.prototype.addOne = function(){
	this.x++;
    this.y++;
};

var p = new SpecialPoint(2,5,1);
p.addOne();
p.swap();
console.log(p.x,p.y,p.z);
/************************Style 3 : Relationship ************************/
var Point = {
	init :function(x,y){
		this.x = x;
		this.y = y;
	},
	swap : function(x,y){
		[this.x,this.y] = [this.y,this.x];
	}
};

var SpecialPoint = Object.create(Point);
SpecialPoint.init = function(x,y,z){
	Point.init(x,y);
  SpecialPoint.z = z;
};
SpecialPoint.addOne = function(){
	this.x++;
	this.y++;
};

var p = Object.create(SpecialPoint);
p.init(2,5,1);
p.addOne();

console.log(p.x,p.y,p.z);
/***************************Style 4 : Class ****************************/
class Point {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	swap(){
		[this.x,this.y] = [this.y,this.x];
	}
}

class SpecialPoint extends Point {
	constructor(x,y,z){
		super(x,y);
		this.z = z;
	}
	addOne(){
		this.x++;
		this.y++;
	}
}