// define loop here
var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i],i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};

// define extendObj here

var extendObj = function(collection, callback){
	var newObj = [];
	loop(collection, function(element, key){
		
		return collection + callback;
		newObj.push(callback(element, key))
	});
	return newObj;
}



// test data we're giving you:
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

// test extendObj here using the two sample data objects given above

console.log(extendObj(Jon, moreCharacteristics));
