'use strict';

var is = require('zanner-typeof').is;
var of = require('zanner-typeof').of;
var ofs = require('zanner-typeof').ofs;

function indexItem(_items, _id, _compare){
	return of(_items, 'array') ? undefined : _items.findIndex((item, index) => _compare(item.id, _id)==0);
};

function setItem(_items, _id, _value, _compare){
	if(!of(_items, 'array')){
		return undefined;
	}
	var itemIndex = indexItem(_items, _id, _compare), itemState;
	if(itemIndex<0){
		itemIndex = _items.push({key: _key, value: _value});
		itemState = 'new';
	}
	else{
		_items[itemIndex] = _item;
		itemState = 'overload';
	}
	return [itemIndex, itemState];
};

function getItem(_items, _key, _compareKey){

};

var index = 'index';
class mapper {
	constructor () {
		this._items = [1, 2];
	};

	get count () {
		return this._items.length;
	}

	item (index) {
		if (index===undefined) return this._items;
		else if (index in this._items) return this._items[index];
		else undefined;
	}

	key (index) {
		return this._items.find((k) => _key==k);
	}

/*
	var items = [];
	var keyCompare = function(key1, key2){
		return _keyCompare(key1, key2);
	};
	//
	this.get = function(key){
		return items.find(function(item, index){
			return fKeyCompare(key, item.key)==0;
		});
	};
	*/
};

var m = new mapper();

console.log(m.count);
console.log(m.item(4));

