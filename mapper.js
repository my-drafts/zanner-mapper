
function mapper(_keyCompare){
	var items = [];
	var keyCompare = function(key1, key2){
		return _keyCompare(key1, key2);
	};
	//
	this.get = function(key){
		return items.find(function(){
			return fKeyCompare
		});
	};
};