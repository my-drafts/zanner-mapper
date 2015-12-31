
function mapper(_keyCompare){
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
};