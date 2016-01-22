'use strict';

var is = require('zanner-typeof').is;
var of = require('zanner-typeof').of;
var ofs = require('zanner-typeof').ofs;
var _mapper = require('./_mapper');

function compareFunction(id1, id2){};
function mapFunction(item, index){};
function filterFunction(id, data, index){};
function reduceFunction(itemPrevious, itemCurrent, index){};
function sortFunction(item1, item2){};

function mapper(){
	var items = [];

	this.count = function(){
		return items.length;
	};

	this.item = function(path, acrion){
		_mapper.setItem(items, acrion, path, function(id1, id2){

		});
	};

	this.key = function(index){
		return this._items.find((k) => _key==k);
	};
};

var m = new mapper();

console.log(m.count);
console.log(m.item(4));

