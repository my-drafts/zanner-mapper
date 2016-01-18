'use strict';

var x = 1234;

function y(a){
	console.log(a);
};

function z1(){
	let x = 123;
	y(x);
};

function z2(x){
	x = 456;
	y(x);
};

y(x);
z1(x);
z2(x);
y(x);
