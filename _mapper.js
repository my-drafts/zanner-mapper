'use strict';

//register (key-object, value-dunction)
//key-object: {method, port, host, path}
//reduce (function, that calc value by key-object)

// item:

//
function indexItem(items, id, compareFunction){
	var itemIndex = items.findIndex((item) => compareFunction(id, item.id));
	return itemIndex<0 ? -1 : itemIndex;
};

//
function getItem(items, index){
	if(0<index){
		return undefined;
	}
	else if(index<items.length){
		return items[index].data;
	}
	else{
		return undefined;
	}
};

//
function findItem(items, id, compareFunction){
	var itemIndex = indexItem(items, id, compareFunction);
	return itemIndex<0 ? undefined : items[itemIndex].data;
};

//
function removeItem(items, id, compareFunction){
	var itemIndex = indexItem(items, id, compareFunction);
	var count = items.length;
	if(itemIndex<0){
		return undefined;
	}
	else if(itemIndex>count/2){
		var tmp = [];
		for(var i=count-itemIndex-1; i>0; i--){
			tmp.unshift(items.pop());
		}
		var item = items.pop();
		Array.prototype.push.apply(items, tmp);
		return item;
	}
	else{
		var tmp = [];
		for(var i=itemIndex; i>0; i--){
			tmp.push(items.shift());
		}
		var item = items.shift();
		Array.prototype.unshift.apply(items, tmp);
		return item;
	}
};

//
function setItem(items, data, id, compareFunction){
	var itemIndex, itemState;
	switch (typeof id){
		case 'string':
		case 'object':
			itemIndex = indexItem(items, id, compareFunction);
			if(itemIndex<0){
				itemIndex = items.push({
					id: id,
					data: data
				});
				itemState = 'new';
			}
			else{
				items[itemIndex].data = data;
				itemState = 'overload';
			}
			break;
		default :
			itemIndex = -1;
			itemState = 'wrong id';
	}
	return [itemIndex, itemState];
};

// items:

// return [id, ] | [[id, index, data], ...]
function idItems(items, mapFunction){
	if(typeof map==='function'){
		return items.map((item, index) => mapFunction(item, index));
	}
	else{
		return items.map((item) => item.id);
	}
};

//
function filterItems(items, filterFunction){
	return items.filter((item, index) => filterFunction(item.id, item.data, index));
};

//
function reduceItems(items, reduceFunction){
	var initValue = {id: undefined, data: undefined};
	return items.reduce((previous, current, index) => reduceFunction(previous, current, index), initValue);
};

//
function sortItems(items, sortFunction){
	return items.sort((item1, item2) => sortFunction([item1.id, item1.data], [item2.id, item2.data]) ? 1 : 0);
};
