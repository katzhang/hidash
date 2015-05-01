var merge = function(destObj) {
	var sources = Array.prototype.slice.call(arguments, 1);
	var currentSource;


	for (var i = 0; i < sources.length; i++) {
		currentSource = sources[i];
		desObj = deepCopy(destObj, currentSource);
	}

	return destObj;
};

var deepCopy = function(destObj, sourceObj) {
	var prop;

	if (sourceObj === null || typeof sourceObj !== 'object') {
		return sourceObj;
	}

	for (prop in sourceObj) {
		if (sourceObj.hasOwnProperty(prop)) { 
			if (!destObj.hasOwnProperty(prop)) {
				destObj[prop] = {};
			}
			destObj[prop] = deepCopy(destObj[prop], sourceObj[prop]);
		}
	}

	return destObj;
};

module.exports = {
	merge: merge,
	deepCopy: deepCopy
};

